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
exports.ArticleProjectCreate = void 0;
var utils_1 = require("../../../internal/utils");
var fundingcreate_1 = require("./fundingcreate");
var timelineupdate_1 = require("./timelineupdate");
var ArticleProjectCreate = /** @class */ (function (_super) {
    __extends(ArticleProjectCreate, _super);
    function ArticleProjectCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authors" }),
        __metadata("design:type", Array)
    ], ArticleProjectCreate.prototype, "authors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], ArticleProjectCreate.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields" }),
        __metadata("design:type", Object)
    ], ArticleProjectCreate.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defined_type" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "definedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doi" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "doi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=funding" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "funding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=funding_list", elemType: fundingcreate_1.FundingCreate }),
        __metadata("design:type", Array)
    ], ArticleProjectCreate.prototype, "fundingList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=handle" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "handle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keywords" }),
        __metadata("design:type", Array)
    ], ArticleProjectCreate.prototype, "keywords", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", Number)
    ], ArticleProjectCreate.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", Array)
    ], ArticleProjectCreate.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_doi" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "resourceDoi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_title" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "resourceTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ArticleProjectCreate.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeline" }),
        __metadata("design:type", timelineupdate_1.TimelineUpdate)
    ], ArticleProjectCreate.prototype, "timeline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ArticleProjectCreate.prototype, "title", void 0);
    return ArticleProjectCreate;
}(utils_1.SpeakeasyBase));
exports.ArticleProjectCreate = ArticleProjectCreate;
