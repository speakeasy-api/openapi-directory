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
exports.ListAppsResponse = exports.ListAppsRequest = exports.ListApps401ApplicationJson = exports.ListApps200ApplicationJson = exports.ListApps200ApplicationJsonApps = exports.ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin = exports.ListApps200ApplicationJsonAppsDomains = exports.ListApps200ApplicationJsonAppsDomainsProgress = exports.ListApps200ApplicationJsonAppsDomainsPhaseEnum = exports.ListAppsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAppsQueryParams = /** @class */ (function (_super) {
    __extends(ListAppsQueryParams, _super);
    function ListAppsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAppsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAppsQueryParams.prototype, "perPage", void 0);
    return ListAppsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAppsQueryParams = ListAppsQueryParams;
var ListApps200ApplicationJsonAppsDomainsPhaseEnum;
(function (ListApps200ApplicationJsonAppsDomainsPhaseEnum) {
    ListApps200ApplicationJsonAppsDomainsPhaseEnum["Unknown"] = "UNKNOWN";
    ListApps200ApplicationJsonAppsDomainsPhaseEnum["Pending"] = "PENDING";
    ListApps200ApplicationJsonAppsDomainsPhaseEnum["Configuring"] = "CONFIGURING";
    ListApps200ApplicationJsonAppsDomainsPhaseEnum["Active"] = "ACTIVE";
    ListApps200ApplicationJsonAppsDomainsPhaseEnum["Error"] = "ERROR";
})(ListApps200ApplicationJsonAppsDomainsPhaseEnum = exports.ListApps200ApplicationJsonAppsDomainsPhaseEnum || (exports.ListApps200ApplicationJsonAppsDomainsPhaseEnum = {}));
var ListApps200ApplicationJsonAppsDomainsProgress = /** @class */ (function (_super) {
    __extends(ListApps200ApplicationJsonAppsDomainsProgress, _super);
    function ListApps200ApplicationJsonAppsDomainsProgress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=steps" }),
        __metadata("design:type", Array)
    ], ListApps200ApplicationJsonAppsDomainsProgress.prototype, "steps", void 0);
    return ListApps200ApplicationJsonAppsDomainsProgress;
}(utils_1.SpeakeasyBase));
exports.ListApps200ApplicationJsonAppsDomainsProgress = ListApps200ApplicationJsonAppsDomainsProgress;
var ListApps200ApplicationJsonAppsDomains = /** @class */ (function (_super) {
    __extends(ListApps200ApplicationJsonAppsDomains, _super);
    function ListApps200ApplicationJsonAppsDomains() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsDomains.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phase" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsDomains.prototype, "phase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=progress" }),
        __metadata("design:type", ListApps200ApplicationJsonAppsDomainsProgress)
    ], ListApps200ApplicationJsonAppsDomains.prototype, "progress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems)
    ], ListApps200ApplicationJsonAppsDomains.prototype, "spec", void 0);
    return ListApps200ApplicationJsonAppsDomains;
}(utils_1.SpeakeasyBase));
exports.ListApps200ApplicationJsonAppsDomains = ListApps200ApplicationJsonAppsDomains;
var ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin = /** @class */ (function (_super) {
    __extends(ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin, _super);
    function ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=continent" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "continent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data_centers" }),
        __metadata("design:type", Array)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "dataCenters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default" }),
        __metadata("design:type", Boolean)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "default", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "disabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=flag" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "flag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "label", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "reason", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin.prototype, "slug", void 0);
    return ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin;
}(utils_1.SpeakeasyBase));
exports.ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin = ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin;
// ListApps200ApplicationJsonApps
/**
 * An application's configuration and status.
**/
var ListApps200ApplicationJsonApps = /** @class */ (function (_super) {
    __extends(ListApps200ApplicationJsonApps, _super);
    function ListApps200ApplicationJsonApps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active_deployment" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems)
    ], ListApps200ApplicationJsonApps.prototype, "activeDeployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListApps200ApplicationJsonApps.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=default_ingress" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "defaultIngress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=domains", elemType: ListApps200ApplicationJsonAppsDomains }),
        __metadata("design:type", Array)
    ], ListApps200ApplicationJsonApps.prototype, "domains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=in_progress_deployment" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems)
    ], ListApps200ApplicationJsonApps.prototype, "inProgressDeployment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_deployment_created_at" }),
        __metadata("design:type", Date)
    ], ListApps200ApplicationJsonApps.prototype, "lastDeploymentCreatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_domain" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "liveDomain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_url" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "liveUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=live_url_base" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "liveUrlBase", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_uuid" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "ownerUuid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin)
    ], ListApps200ApplicationJsonApps.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=spec" }),
        __metadata("design:type", shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec)
    ], ListApps200ApplicationJsonApps.prototype, "spec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tier_slug" }),
        __metadata("design:type", String)
    ], ListApps200ApplicationJsonApps.prototype, "tierSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ListApps200ApplicationJsonApps.prototype, "updatedAt", void 0);
    return ListApps200ApplicationJsonApps;
}(utils_1.SpeakeasyBase));
exports.ListApps200ApplicationJsonApps = ListApps200ApplicationJsonApps;
var ListApps200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListApps200ApplicationJson, _super);
    function ListApps200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=apps", elemType: ListApps200ApplicationJsonApps }),
        __metadata("design:type", Array)
    ], ListApps200ApplicationJson.prototype, "apps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks)
    ], ListApps200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta)
    ], ListApps200ApplicationJson.prototype, "meta", void 0);
    return ListApps200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListApps200ApplicationJson = ListApps200ApplicationJson;
var ListApps401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListApps401ApplicationJson, _super);
    function ListApps401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListApps401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListApps401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListApps401ApplicationJson.prototype, "requestId", void 0);
    return ListApps401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListApps401ApplicationJson = ListApps401ApplicationJson;
var ListAppsRequest = /** @class */ (function (_super) {
    __extends(ListAppsRequest, _super);
    function ListAppsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAppsQueryParams)
    ], ListAppsRequest.prototype, "queryParams", void 0);
    return ListAppsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAppsRequest = ListAppsRequest;
var ListAppsResponse = /** @class */ (function (_super) {
    __extends(ListAppsResponse, _super);
    function ListAppsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAppsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAppsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAppsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListApps200ApplicationJson)
    ], ListAppsResponse.prototype, "listApps200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListApps401ApplicationJson)
    ], ListAppsResponse.prototype, "listApps401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAppsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAppsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAppsResponse = ListAppsResponse;
