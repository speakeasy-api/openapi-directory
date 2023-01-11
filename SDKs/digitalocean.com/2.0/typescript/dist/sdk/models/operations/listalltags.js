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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAllTagsResponse = exports.ListAllTags401ApplicationJson = exports.ListAllTags200ApplicationJson = exports.ListAllTags200ApplicationJsonTags = exports.ListAllTags200ApplicationJsonTagsResources = exports.ListAllTags200ApplicationJsonMeta = exports.ListAllTags200ApplicationJsonLinks = exports.ListAllTags200ApplicationJsonLinksPages2 = exports.ListAllTags200ApplicationJsonLinksPages1 = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllTags200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJsonLinksPages1, _super);
    function ListAllTags200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllTags200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllTags200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllTags200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJsonLinksPages1 = ListAllTags200ApplicationJsonLinksPages1;
var ListAllTags200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJsonLinksPages2, _super);
    function ListAllTags200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllTags200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllTags200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllTags200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJsonLinksPages2 = ListAllTags200ApplicationJsonLinksPages2;
var ListAllTags200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJsonLinks, _super);
    function ListAllTags200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllTags200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllTags200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJsonLinks = ListAllTags200ApplicationJsonLinks;
// ListAllTags200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllTags200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJsonMeta, _super);
    function ListAllTags200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllTags200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllTags200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJsonMeta = ListAllTags200ApplicationJsonMeta;
// ListAllTags200ApplicationJsonTagsResources
/**
 * Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
**/
var ListAllTags200ApplicationJsonTagsResources = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJsonTagsResources, _super);
    function ListAllTags200ApplicationJsonTagsResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databases" }),
        __metadata("design:type", shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "databases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplets" }),
        __metadata("design:type", shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "droplets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imgages" }),
        __metadata("design:type", shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "imgages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_tagged_uri" }),
        __metadata("design:type", String)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "lastTaggedUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume_snapshots" }),
        __metadata("design:type", shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "volumeSnapshots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumes" }),
        __metadata("design:type", shared.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], ListAllTags200ApplicationJsonTagsResources.prototype, "volumes", void 0);
    return ListAllTags200ApplicationJsonTagsResources;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJsonTagsResources = ListAllTags200ApplicationJsonTagsResources;
// ListAllTags200ApplicationJsonTags
/**
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
var ListAllTags200ApplicationJsonTags = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJsonTags, _super);
    function ListAllTags200ApplicationJsonTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllTags200ApplicationJsonTags.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", ListAllTags200ApplicationJsonTagsResources)
    ], ListAllTags200ApplicationJsonTags.prototype, "resources", void 0);
    return ListAllTags200ApplicationJsonTags;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJsonTags = ListAllTags200ApplicationJsonTags;
var ListAllTags200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllTags200ApplicationJson, _super);
    function ListAllTags200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllTags200ApplicationJsonLinks)
    ], ListAllTags200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllTags200ApplicationJsonMeta)
    ], ListAllTags200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags", elemType: ListAllTags200ApplicationJsonTags }),
        __metadata("design:type", Array)
    ], ListAllTags200ApplicationJson.prototype, "tags", void 0);
    return ListAllTags200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllTags200ApplicationJson = ListAllTags200ApplicationJson;
var ListAllTags401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllTags401ApplicationJson, _super);
    function ListAllTags401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllTags401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllTags401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllTags401ApplicationJson.prototype, "requestId", void 0);
    return ListAllTags401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllTags401ApplicationJson = ListAllTags401ApplicationJson;
var ListAllTagsResponse = /** @class */ (function (_super) {
    __extends(ListAllTagsResponse, _super);
    function ListAllTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllTagsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllTagsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllTags200ApplicationJson)
    ], ListAllTagsResponse.prototype, "listAllTags200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllTags401ApplicationJson)
    ], ListAllTagsResponse.prototype, "listAllTags401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllTagsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllTagsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllTagsResponse = ListAllTagsResponse;
