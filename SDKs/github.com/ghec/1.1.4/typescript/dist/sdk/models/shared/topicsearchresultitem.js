"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.TopicSearchResultItem = exports.TopicSearchResultItemRelated = exports.TopicSearchResultItemRelatedTopicRelation = exports.TopicSearchResultItemAliases = exports.TopicSearchResultItemAliasesTopicRelation = void 0;
var utils_1 = require("../../../internal/utils");
var searchresulttextmatches_1 = require("./searchresulttextmatches");
var class_transformer_1 = require("class-transformer");
var TopicSearchResultItemAliasesTopicRelation = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemAliasesTopicRelation, _super);
    function TopicSearchResultItemAliasesTopicRelation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "relation_type" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "relationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "topic_id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemAliasesTopicRelation.prototype, "topicId", void 0);
    return TopicSearchResultItemAliasesTopicRelation;
}(utils_1.SpeakeasyBase));
exports.TopicSearchResultItemAliasesTopicRelation = TopicSearchResultItemAliasesTopicRelation;
var TopicSearchResultItemAliases = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemAliases, _super);
    function TopicSearchResultItemAliases() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "topic_relation" }),
        (0, class_transformer_1.Type)(function () { return TopicSearchResultItemAliasesTopicRelation; }),
        __metadata("design:type", TopicSearchResultItemAliasesTopicRelation)
    ], TopicSearchResultItemAliases.prototype, "topicRelation", void 0);
    return TopicSearchResultItemAliases;
}(utils_1.SpeakeasyBase));
exports.TopicSearchResultItemAliases = TopicSearchResultItemAliases;
var TopicSearchResultItemRelatedTopicRelation = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemRelatedTopicRelation, _super);
    function TopicSearchResultItemRelatedTopicRelation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "relation_type" }),
        __metadata("design:type", String)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "relationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "topic_id" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItemRelatedTopicRelation.prototype, "topicId", void 0);
    return TopicSearchResultItemRelatedTopicRelation;
}(utils_1.SpeakeasyBase));
exports.TopicSearchResultItemRelatedTopicRelation = TopicSearchResultItemRelatedTopicRelation;
var TopicSearchResultItemRelated = /** @class */ (function (_super) {
    __extends(TopicSearchResultItemRelated, _super);
    function TopicSearchResultItemRelated() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "topic_relation" }),
        (0, class_transformer_1.Type)(function () { return TopicSearchResultItemRelatedTopicRelation; }),
        __metadata("design:type", TopicSearchResultItemRelatedTopicRelation)
    ], TopicSearchResultItemRelated.prototype, "topicRelation", void 0);
    return TopicSearchResultItemRelated;
}(utils_1.SpeakeasyBase));
exports.TopicSearchResultItemRelated = TopicSearchResultItemRelated;
/**
 * Topic Search Result Item
 */
var TopicSearchResultItem = /** @class */ (function (_super) {
    __extends(TopicSearchResultItem, _super);
    function TopicSearchResultItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: TopicSearchResultItemAliases }),
        (0, class_transformer_1.Expose)({ name: "aliases" }),
        (0, class_transformer_1.Type)(function () { return TopicSearchResultItemAliases; }),
        __metadata("design:type", Array)
    ], TopicSearchResultItem.prototype, "aliases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], TopicSearchResultItem.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "created_by" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "curated" }),
        __metadata("design:type", Boolean)
    ], TopicSearchResultItem.prototype, "curated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "description" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "display_name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "featured" }),
        __metadata("design:type", Boolean)
    ], TopicSearchResultItem.prototype, "featured", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "logo_url" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "logoUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "name" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: TopicSearchResultItemRelated }),
        (0, class_transformer_1.Expose)({ name: "related" }),
        (0, class_transformer_1.Type)(function () { return TopicSearchResultItemRelated; }),
        __metadata("design:type", Array)
    ], TopicSearchResultItem.prototype, "related", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "released" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "released", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "repository_count" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItem.prototype, "repositoryCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "score" }),
        __metadata("design:type", Number)
    ], TopicSearchResultItem.prototype, "score", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "short_description" }),
        __metadata("design:type", String)
    ], TopicSearchResultItem.prototype, "shortDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: searchresulttextmatches_1.SearchResultTextMatches }),
        (0, class_transformer_1.Expose)({ name: "text_matches" }),
        (0, class_transformer_1.Type)(function () { return searchresulttextmatches_1.SearchResultTextMatches; }),
        __metadata("design:type", Array)
    ], TopicSearchResultItem.prototype, "textMatches", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "updated_at" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], TopicSearchResultItem.prototype, "updatedAt", void 0);
    return TopicSearchResultItem;
}(utils_1.SpeakeasyBase));
exports.TopicSearchResultItem = TopicSearchResultItem;
