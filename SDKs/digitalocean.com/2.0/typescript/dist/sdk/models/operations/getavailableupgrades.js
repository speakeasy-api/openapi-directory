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
exports.GetAvailableUpgradesResponse = exports.GetAvailableUpgradesRequest = exports.GetAvailableUpgrades401ApplicationJson = exports.GetAvailableUpgrades200ApplicationJson = exports.GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions = exports.GetAvailableUpgradesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAvailableUpgradesPathParams = /** @class */ (function (_super) {
    __extends(GetAvailableUpgradesPathParams, _super);
    function GetAvailableUpgradesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cluster_id" }),
        __metadata("design:type", String)
    ], GetAvailableUpgradesPathParams.prototype, "clusterId", void 0);
    return GetAvailableUpgradesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetAvailableUpgradesPathParams = GetAvailableUpgradesPathParams;
var GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions = /** @class */ (function (_super) {
    __extends(GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions, _super);
    function GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_version" }),
        __metadata("design:type", String)
    ], GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions.prototype, "kubernetesVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions.prototype, "slug", void 0);
    return GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions;
}(utils_1.SpeakeasyBase));
exports.GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions = GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions;
var GetAvailableUpgrades200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAvailableUpgrades200ApplicationJson, _super);
    function GetAvailableUpgrades200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available_upgrade_versions", elemType: GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions }),
        __metadata("design:type", Array)
    ], GetAvailableUpgrades200ApplicationJson.prototype, "availableUpgradeVersions", void 0);
    return GetAvailableUpgrades200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAvailableUpgrades200ApplicationJson = GetAvailableUpgrades200ApplicationJson;
var GetAvailableUpgrades401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAvailableUpgrades401ApplicationJson, _super);
    function GetAvailableUpgrades401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAvailableUpgrades401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetAvailableUpgrades401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetAvailableUpgrades401ApplicationJson.prototype, "requestId", void 0);
    return GetAvailableUpgrades401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAvailableUpgrades401ApplicationJson = GetAvailableUpgrades401ApplicationJson;
var GetAvailableUpgradesRequest = /** @class */ (function (_super) {
    __extends(GetAvailableUpgradesRequest, _super);
    function GetAvailableUpgradesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAvailableUpgradesPathParams)
    ], GetAvailableUpgradesRequest.prototype, "pathParams", void 0);
    return GetAvailableUpgradesRequest;
}(utils_1.SpeakeasyBase));
exports.GetAvailableUpgradesRequest = GetAvailableUpgradesRequest;
var GetAvailableUpgradesResponse = /** @class */ (function (_super) {
    __extends(GetAvailableUpgradesResponse, _super);
    function GetAvailableUpgradesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAvailableUpgradesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAvailableUpgradesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAvailableUpgradesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAvailableUpgrades200ApplicationJson)
    ], GetAvailableUpgradesResponse.prototype, "getAvailableUpgrades200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAvailableUpgrades401ApplicationJson)
    ], GetAvailableUpgradesResponse.prototype, "getAvailableUpgrades401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetAvailableUpgradesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetAvailableUpgradesResponse;
}(utils_1.SpeakeasyBase));
exports.GetAvailableUpgradesResponse = GetAvailableUpgradesResponse;
