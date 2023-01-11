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
exports.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems = exports.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput = exports.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources = void 0;
var utils_1 = require("../../../internal/utils");
var onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0_1 = require("./onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0");
// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources
/**
 * Tagged Resource Statistics include metadata regarding the resource type that has been tagged.
**/
var Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources = /** @class */ (function (_super) {
    __extends(Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources, _super);
    function Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=databases" }),
        __metadata("design:type", onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0_1.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "databases", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplets" }),
        __metadata("design:type", onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0_1.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "droplets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=imgages" }),
        __metadata("design:type", onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0_1.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "imgages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_tagged_uri" }),
        __metadata("design:type", String)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "lastTaggedUri", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume_snapshots" }),
        __metadata("design:type", onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0_1.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "volumeSnapshots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumes" }),
        __metadata("design:type", onev21tagsgetresponses200contentapplication1jsonschemaallof0propertiestagsitemspropertiesresourcesallof0_1.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsPropertiesResourcesAllOf0)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources.prototype, "volumes", void 0);
    return Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources;
}(utils_1.SpeakeasyBase));
exports.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources = Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources;
// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput
/**
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
var Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput = /** @class */ (function (_super) {
    __extends(Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput, _super);
    function Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput.prototype, "name", void 0);
    return Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput;
}(utils_1.SpeakeasyBase));
exports.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput = Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsInput;
// Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems
/**
 * A tag is a label that can be applied to a resource (currently Droplets, Images, Volumes, Volume Snapshots, and Database clusters) in order to better organize or facilitate the lookups and actions on it.
 * Tags have two attributes: a user defined `name` attribute and an embedded `resources` attribute with information about resources that have been tagged.
**/
var Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems = /** @class */ (function (_super) {
    __extends(Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems, _super);
    function Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItemsResources)
    ], Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems.prototype, "resources", void 0);
    return Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems;
}(utils_1.SpeakeasyBase));
exports.Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems = Onev21tagsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesTagsItems;
