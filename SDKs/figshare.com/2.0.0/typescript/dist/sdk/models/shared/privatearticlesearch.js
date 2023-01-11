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
exports.PrivateArticleSearch = exports.PrivateArticleSearchOrderDirectionEnum = exports.PrivateArticleSearchOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PrivateArticleSearchOrderEnum;
(function (PrivateArticleSearchOrderEnum) {
    PrivateArticleSearchOrderEnum["PublishedDate"] = "published_date";
    PrivateArticleSearchOrderEnum["ModifiedDate"] = "modified_date";
    PrivateArticleSearchOrderEnum["Views"] = "views";
    PrivateArticleSearchOrderEnum["Shares"] = "shares";
    PrivateArticleSearchOrderEnum["Downloads"] = "downloads";
    PrivateArticleSearchOrderEnum["Cites"] = "cites";
})(PrivateArticleSearchOrderEnum = exports.PrivateArticleSearchOrderEnum || (exports.PrivateArticleSearchOrderEnum = {}));
var PrivateArticleSearchOrderDirectionEnum;
(function (PrivateArticleSearchOrderDirectionEnum) {
    PrivateArticleSearchOrderDirectionEnum["Asc"] = "asc";
    PrivateArticleSearchOrderDirectionEnum["Desc"] = "desc";
})(PrivateArticleSearchOrderDirectionEnum = exports.PrivateArticleSearchOrderDirectionEnum || (exports.PrivateArticleSearchOrderDirectionEnum = {}));
var PrivateArticleSearch = /** @class */ (function (_super) {
    __extends(PrivateArticleSearch, _super);
    function PrivateArticleSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doi" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "doi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=handle" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "handle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=institution" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "institution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=item_type" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "itemType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_since" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "modifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_direction" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "orderDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PrivateArticleSearch.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_since" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "publishedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_doi" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "resourceDoi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_for" }),
        __metadata("design:type", String)
    ], PrivateArticleSearch.prototype, "searchFor", void 0);
    return PrivateArticleSearch;
}(utils_1.SpeakeasyBase));
exports.PrivateArticleSearch = PrivateArticleSearch;
