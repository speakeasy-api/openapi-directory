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
exports.PrivateCollectionSearch = exports.PrivateCollectionSearchOrderDirectionEnum = exports.PrivateCollectionSearchOrderEnum = void 0;
var utils_1 = require("../../../internal/utils");
var PrivateCollectionSearchOrderEnum;
(function (PrivateCollectionSearchOrderEnum) {
    PrivateCollectionSearchOrderEnum["PublishedDate"] = "published_date";
    PrivateCollectionSearchOrderEnum["ModifiedDate"] = "modified_date";
    PrivateCollectionSearchOrderEnum["Views"] = "views";
    PrivateCollectionSearchOrderEnum["Shares"] = "shares";
    PrivateCollectionSearchOrderEnum["Cites"] = "cites";
})(PrivateCollectionSearchOrderEnum = exports.PrivateCollectionSearchOrderEnum || (exports.PrivateCollectionSearchOrderEnum = {}));
var PrivateCollectionSearchOrderDirectionEnum;
(function (PrivateCollectionSearchOrderDirectionEnum) {
    PrivateCollectionSearchOrderDirectionEnum["Asc"] = "asc";
    PrivateCollectionSearchOrderDirectionEnum["Desc"] = "desc";
})(PrivateCollectionSearchOrderDirectionEnum = exports.PrivateCollectionSearchOrderDirectionEnum || (exports.PrivateCollectionSearchOrderDirectionEnum = {}));
var PrivateCollectionSearch = /** @class */ (function (_super) {
    __extends(PrivateCollectionSearch, _super);
    function PrivateCollectionSearch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doi" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "doi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group" }),
        __metadata("design:type", Number)
    ], PrivateCollectionSearch.prototype, "group", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=handle" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "handle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=institution" }),
        __metadata("design:type", Number)
    ], PrivateCollectionSearch.prototype, "institution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=limit" }),
        __metadata("design:type", Number)
    ], PrivateCollectionSearch.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_since" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "modifiedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=offset" }),
        __metadata("design:type", Number)
    ], PrivateCollectionSearch.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=order_direction" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "orderDirection", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], PrivateCollectionSearch.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], PrivateCollectionSearch.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_since" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "publishedSince", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_doi" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "resourceDoi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_id" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "resourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=search_for" }),
        __metadata("design:type", String)
    ], PrivateCollectionSearch.prototype, "searchFor", void 0);
    return PrivateCollectionSearch;
}(utils_1.SpeakeasyBase));
exports.PrivateCollectionSearch = PrivateCollectionSearch;
