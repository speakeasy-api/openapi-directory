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
exports.ArticleCompletePrivate = void 0;
var utils_1 = require("../../../internal/utils");
var author_1 = require("./author");
var category_1 = require("./category");
var customarticlefield_1 = require("./customarticlefield");
var groupembargooptions_1 = require("./groupembargooptions");
var publicfile_1 = require("./publicfile");
var license_1 = require("./license");
var timeline_1 = require("./timeline");
var ArticleCompletePrivate = /** @class */ (function (_super) {
    __extends(ArticleCompletePrivate, _super);
    function ArticleCompletePrivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authors", elemType: author_1.Author }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "authors", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=categories", elemType: category_1.Category }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "categories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=citation" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "citation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=confidential_reason" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "confidentialReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_date" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=custom_fields", elemType: customarticlefield_1.CustomArticleField }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "customFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defined_type" }),
        __metadata("design:type", Number)
    ], ArticleCompletePrivate.prototype, "definedType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=defined_type_name" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "definedTypeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doi" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "doi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embargo_date" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "embargoDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embargo_options", elemType: groupembargooptions_1.GroupEmbargoOptions }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "embargoOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embargo_reason" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "embargoReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embargo_title" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "embargoTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=embargo_type" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "embargoType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=figshare_url" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "figshareUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=files", elemType: publicfile_1.PublicFile }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "files", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=funding" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "funding", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=funding_list" }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "fundingList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_id" }),
        __metadata("design:type", Number)
    ], ArticleCompletePrivate.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=group_resource_id" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "groupResourceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=handle" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "handle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_linked_file" }),
        __metadata("design:type", Boolean)
    ], ArticleCompletePrivate.prototype, "hasLinkedFile", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ArticleCompletePrivate.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_active" }),
        __metadata("design:type", Boolean)
    ], ArticleCompletePrivate.prototype, "isActive", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_confidential" }),
        __metadata("design:type", Boolean)
    ], ArticleCompletePrivate.prototype, "isConfidential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_embargoed" }),
        __metadata("design:type", Boolean)
    ], ArticleCompletePrivate.prototype, "isEmbargoed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_metadata_record" }),
        __metadata("design:type", Boolean)
    ], ArticleCompletePrivate.prototype, "isMetadataRecord", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=is_public" }),
        __metadata("design:type", Boolean)
    ], ArticleCompletePrivate.prototype, "isPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=license" }),
        __metadata("design:type", license_1.License)
    ], ArticleCompletePrivate.prototype, "license", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata_reason" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "metadataReason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=modified_date" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "modifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=published_date" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "publishedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=references" }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "references", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_doi" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "resourceDoi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_title" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "resourceTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], ArticleCompletePrivate.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ArticleCompletePrivate.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=thumb" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "thumb", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeline" }),
        __metadata("design:type", timeline_1.Timeline)
    ], ArticleCompletePrivate.prototype, "timeline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "url", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url_private_api" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "urlPrivateApi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url_private_html" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "urlPrivateHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url_public_api" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "urlPublicApi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=url_public_html" }),
        __metadata("design:type", String)
    ], ArticleCompletePrivate.prototype, "urlPublicHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", Number)
    ], ArticleCompletePrivate.prototype, "version", void 0);
    return ArticleCompletePrivate;
}(utils_1.SpeakeasyBase));
exports.ArticleCompletePrivate = ArticleCompletePrivate;
