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
exports.GetDestroyWithAssociatedResourcesStatusResponse = exports.GetDestroyWithAssociatedResourcesStatusRequest = exports.GetDestroyWithAssociatedResourcesStatus401ApplicationJson = exports.GetDestroyWithAssociatedResourcesStatus200ApplicationJson = exports.GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources = exports.GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet = exports.GetDestroyWithAssociatedResourcesStatusPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDestroyWithAssociatedResourcesStatusPathParams = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatusPathParams, _super);
    function GetDestroyWithAssociatedResourcesStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=droplet_id" }),
        __metadata("design:type", Number)
    ], GetDestroyWithAssociatedResourcesStatusPathParams.prototype, "dropletId", void 0);
    return GetDestroyWithAssociatedResourcesStatusPathParams;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatusPathParams = GetDestroyWithAssociatedResourcesStatusPathParams;
// GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet
/**
 * An object containing information about a resource scheduled for deletion.
**/
var GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet, _super);
    function GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destroyed_at" }),
        __metadata("design:type", Date)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet.prototype, "destroyedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_message" }),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet.prototype, "name", void 0);
    return GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet = GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet;
// GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources
/**
 * An object containing additional information about resource related to a Droplet requested to be destroyed.
**/
var GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources, _super);
    function GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet }),
        __metadata("design:type", Array)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources.prototype, "snapshots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume_snapshots", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet }),
        __metadata("design:type", Array)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources.prototype, "volumeSnapshots", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volumes", elemType: shared.Onev21droplets1Percent7BdropletIdPercent7D1destroyWithAssociatedResources1statusGetResponses200ContentApplication1jsonSchemaPropertiesDroplet }),
        __metadata("design:type", Array)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources.prototype, "volumes", void 0);
    return GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources = GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources;
// GetDestroyWithAssociatedResourcesStatus200ApplicationJson
/**
 * An objects containing information about a resources scheduled for deletion.
**/
var GetDestroyWithAssociatedResourcesStatus200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatus200ApplicationJson, _super);
    function GetDestroyWithAssociatedResourcesStatus200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=completed_at" }),
        __metadata("design:type", Date)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJson.prototype, "completedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplet" }),
        __metadata("design:type", GetDestroyWithAssociatedResourcesStatus200ApplicationJsonDroplet)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJson.prototype, "droplet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=failures" }),
        __metadata("design:type", Number)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJson.prototype, "failures", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources" }),
        __metadata("design:type", GetDestroyWithAssociatedResourcesStatus200ApplicationJsonResources)
    ], GetDestroyWithAssociatedResourcesStatus200ApplicationJson.prototype, "resources", void 0);
    return GetDestroyWithAssociatedResourcesStatus200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatus200ApplicationJson = GetDestroyWithAssociatedResourcesStatus200ApplicationJson;
var GetDestroyWithAssociatedResourcesStatus401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatus401ApplicationJson, _super);
    function GetDestroyWithAssociatedResourcesStatus401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatus401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatus401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatus401ApplicationJson.prototype, "requestId", void 0);
    return GetDestroyWithAssociatedResourcesStatus401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatus401ApplicationJson = GetDestroyWithAssociatedResourcesStatus401ApplicationJson;
var GetDestroyWithAssociatedResourcesStatusRequest = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatusRequest, _super);
    function GetDestroyWithAssociatedResourcesStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDestroyWithAssociatedResourcesStatusPathParams)
    ], GetDestroyWithAssociatedResourcesStatusRequest.prototype, "pathParams", void 0);
    return GetDestroyWithAssociatedResourcesStatusRequest;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatusRequest = GetDestroyWithAssociatedResourcesStatusRequest;
var GetDestroyWithAssociatedResourcesStatusResponse = /** @class */ (function (_super) {
    __extends(GetDestroyWithAssociatedResourcesStatusResponse, _super);
    function GetDestroyWithAssociatedResourcesStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDestroyWithAssociatedResourcesStatusResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDestroyWithAssociatedResourcesStatusResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDestroyWithAssociatedResourcesStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDestroyWithAssociatedResourcesStatus200ApplicationJson)
    ], GetDestroyWithAssociatedResourcesStatusResponse.prototype, "getDestroyWithAssociatedResourcesStatus200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDestroyWithAssociatedResourcesStatus401ApplicationJson)
    ], GetDestroyWithAssociatedResourcesStatusResponse.prototype, "getDestroyWithAssociatedResourcesStatus401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDestroyWithAssociatedResourcesStatusResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDestroyWithAssociatedResourcesStatusResponse;
}(utils_1.SpeakeasyBase));
exports.GetDestroyWithAssociatedResourcesStatusResponse = GetDestroyWithAssociatedResourcesStatusResponse;
