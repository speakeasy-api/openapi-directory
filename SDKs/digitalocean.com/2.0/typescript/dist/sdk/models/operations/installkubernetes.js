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
exports.InstallKubernetesResponse = exports.InstallKubernetesRequest = exports.InstallKubernetes401ApplicationJson = exports.InstallKubernetes200ApplicationJson = exports.InstallKubernetesRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var InstallKubernetesRequestBody = /** @class */ (function (_super) {
    __extends(InstallKubernetesRequestBody, _super);
    function InstallKubernetesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=addon_slugs" }),
        __metadata("design:type", Array)
    ], InstallKubernetesRequestBody.prototype, "addonSlugs", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cluster_uuid" }),
        __metadata("design:type", String)
    ], InstallKubernetesRequestBody.prototype, "clusterUuid", void 0);
    return InstallKubernetesRequestBody;
}(utils_1.SpeakeasyBase));
exports.InstallKubernetesRequestBody = InstallKubernetesRequestBody;
var InstallKubernetes200ApplicationJson = /** @class */ (function (_super) {
    __extends(InstallKubernetes200ApplicationJson, _super);
    function InstallKubernetes200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], InstallKubernetes200ApplicationJson.prototype, "message", void 0);
    return InstallKubernetes200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.InstallKubernetes200ApplicationJson = InstallKubernetes200ApplicationJson;
var InstallKubernetes401ApplicationJson = /** @class */ (function (_super) {
    __extends(InstallKubernetes401ApplicationJson, _super);
    function InstallKubernetes401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InstallKubernetes401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], InstallKubernetes401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], InstallKubernetes401ApplicationJson.prototype, "requestId", void 0);
    return InstallKubernetes401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.InstallKubernetes401ApplicationJson = InstallKubernetes401ApplicationJson;
var InstallKubernetesRequest = /** @class */ (function (_super) {
    __extends(InstallKubernetesRequest, _super);
    function InstallKubernetesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", InstallKubernetesRequestBody)
    ], InstallKubernetesRequest.prototype, "request", void 0);
    return InstallKubernetesRequest;
}(utils_1.SpeakeasyBase));
exports.InstallKubernetesRequest = InstallKubernetesRequest;
var InstallKubernetesResponse = /** @class */ (function (_super) {
    __extends(InstallKubernetesResponse, _super);
    function InstallKubernetesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], InstallKubernetesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], InstallKubernetesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], InstallKubernetesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstallKubernetes200ApplicationJson)
    ], InstallKubernetesResponse.prototype, "installKubernetes200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", InstallKubernetes401ApplicationJson)
    ], InstallKubernetesResponse.prototype, "installKubernetes401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], InstallKubernetesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return InstallKubernetesResponse;
}(utils_1.SpeakeasyBase));
exports.InstallKubernetesResponse = InstallKubernetesResponse;
