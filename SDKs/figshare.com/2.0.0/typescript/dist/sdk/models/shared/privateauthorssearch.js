"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateAuthorsSearch = exports.PrivateAuthorsSearchOrderDirectionEnum = exports.PrivateAuthorsSearchOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PrivateAuthorsSearchOrderEnum;
(function (PrivateAuthorsSearchOrderEnum) {
    PrivateAuthorsSearchOrderEnum["PublishedDate"] = "published_date";
    PrivateAuthorsSearchOrderEnum["ModifiedDate"] = "modified_date";
    PrivateAuthorsSearchOrderEnum["Views"] = "views";
    PrivateAuthorsSearchOrderEnum["Shares"] = "shares";
    PrivateAuthorsSearchOrderEnum["Downloads"] = "downloads";
    PrivateAuthorsSearchOrderEnum["Cites"] = "cites";
})(PrivateAuthorsSearchOrderEnum = exports.PrivateAuthorsSearchOrderEnum || (exports.PrivateAuthorsSearchOrderEnum = {}));
var PrivateAuthorsSearchOrderDirectionEnum;
(function (PrivateAuthorsSearchOrderDirectionEnum) {
    PrivateAuthorsSearchOrderDirectionEnum["Asc"] = "asc";
    PrivateAuthorsSearchOrderDirectionEnum["Desc"] = "desc";
})(PrivateAuthorsSearchOrderDirectionEnum = exports.PrivateAuthorsSearchOrderDirectionEnum || (exports.PrivateAuthorsSearchOrderDirectionEnum = {}));
var PrivateAuthorsSearch = /** @class */ (function (_super) {
    __extends(PrivateAuthorsSearch, _super);
    function PrivateAuthorsSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], PrivateAuthorsSearch.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=institution_id" }),
        __metadata("design:type", Number)
    ], PrivateAuthorsSearch.prototype, "institutionId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], PrivateAuthorsSearch.prototype, "isActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_public" }),
        __metadata("design:type", Boolean)
    ], PrivateAuthorsSearch.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], PrivateAuthorsSearch.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], PrivateAuthorsSearch.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=orcid" }),
        __metadata("design:type", String)
    ], PrivateAuthorsSearch.prototype, "orcid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], PrivateAuthorsSearch.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_direction" }),
        __metadata("design:type", String)
    ], PrivateAuthorsSearch.prototype, "orderDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PrivateAuthorsSearch.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PrivateAuthorsSearch.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_for" }),
        __metadata("design:type", String)
    ], PrivateAuthorsSearch.prototype, "searchFor", void 0);
    return PrivateAuthorsSearch;
}(utils_1.SpeakeasyBase));
exports.PrivateAuthorsSearch = PrivateAuthorsSearch;
