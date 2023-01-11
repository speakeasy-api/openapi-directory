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
exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems = exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin = exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains = exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress = exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = void 0;
var utils_1 = require("../../../internal/utils");
var onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesdomainsitems_1 = require("./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesdomainsitems");
var onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems_1 = require("./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems");
var onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspec_1 = require("./onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspec");
var Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum;
(function (Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum) {
    Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum["Unknown"] = "UNKNOWN";
    Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum["Pending"] = "PENDING";
    Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum["Configuring"] = "CONFIGURING";
    Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum["Active"] = "ACTIVE";
    Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum["Error"] = "ERROR";
})(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum || (exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum = {}));
var Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress = /** @class */ (function (_super) {
    __extends(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress, _super);
    function Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps" }),
        __metadata("design:type", Array)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress.prototype, "steps", void 0);
    return Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress;
}(utils_1.SpeakeasyBase));
exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress = Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress;
var Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains = /** @class */ (function (_super) {
    __extends(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains, _super);
    function Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains.prototype, "phase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspecpropertiesdomainsitems_1.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains.prototype, "spec", void 0);
    return Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains;
}(utils_1.SpeakeasyBase));
exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains = Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains;
var Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin = /** @class */ (function (_super) {
    __extends(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin, _super);
    function Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continent" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "continent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_centers" }),
        __metadata("design:type", Array)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "dataCenters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flag" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "flag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin.prototype, "slug", void 0);
    return Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin;
}(utils_1.SpeakeasyBase));
exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin = Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin;
// Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems
/**
 * An application's configuration and status.
**/
var Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems = /** @class */ (function (_super) {
    __extends(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems, _super);
    function Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active_deployment" }),
        __metadata("design:type", onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems_1.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "activeDeployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_ingress" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "defaultIngress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domains", elemType: Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains }),
        __metadata("design:type", Array)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_progress_deployment" }),
        __metadata("design:type", onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitems_1.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "inProgressDeployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_deployment_created_at" }),
        __metadata("design:type", Date)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "lastDeploymentCreatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_domain" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "liveDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_url" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "liveUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_url_base" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "liveUrlBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_uuid" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "ownerUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", onev21apps1percent7bappidpercent7d1deploymentsgetresponses200contentapplication1jsonschemapropertiesdeploymentsitemspropertiesspec_1.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier_slug" }),
        __metadata("design:type", String)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "tierSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems.prototype, "updatedAt", void 0);
    return Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems;
}(utils_1.SpeakeasyBase));
exports.Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems = Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems;
