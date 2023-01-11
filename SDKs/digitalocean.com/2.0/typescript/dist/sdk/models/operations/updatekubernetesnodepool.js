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
exports.UpdateKubernetesNodePoolResponse = exports.UpdateKubernetesNodePoolRequest = exports.UpdateKubernetesNodePool401ApplicationJson = exports.UpdateKubernetesNodePoolRequestBodyInput = exports.UpdateKubernetesNodePoolRequestBodyTaints = exports.UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = exports.UpdateKubernetesNodePoolPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateKubernetesNodePoolPathParams = /** @class */ (function (_super) {
    __extends(UpdateKubernetesNodePoolPathParams, _super);
    function UpdateKubernetesNodePoolPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cluster_id" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolPathParams.prototype, "clusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=node_pool_id" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolPathParams.prototype, "nodePoolId", void 0);
    return UpdateKubernetesNodePoolPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateKubernetesNodePoolPathParams = UpdateKubernetesNodePoolPathParams;
var UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum;
(function (UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum) {
    UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum["NoSchedule"] = "NoSchedule";
    UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum["PreferNoSchedule"] = "PreferNoSchedule";
    UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum["NoExecute"] = "NoExecute";
})(UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = exports.UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum || (exports.UpdateKubernetesNodePoolRequestBodyTaintsEffectEnum = {}));
var UpdateKubernetesNodePoolRequestBodyTaints = /** @class */ (function (_super) {
    __extends(UpdateKubernetesNodePoolRequestBodyTaints, _super);
    function UpdateKubernetesNodePoolRequestBodyTaints() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=effect" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolRequestBodyTaints.prototype, "effect", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolRequestBodyTaints.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolRequestBodyTaints.prototype, "value", void 0);
    return UpdateKubernetesNodePoolRequestBodyTaints;
}(utils_1.SpeakeasyBase));
exports.UpdateKubernetesNodePoolRequestBodyTaints = UpdateKubernetesNodePoolRequestBodyTaints;
var UpdateKubernetesNodePoolRequestBodyInput = /** @class */ (function (_super) {
    __extends(UpdateKubernetesNodePoolRequestBodyInput, _super);
    function UpdateKubernetesNodePoolRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auto_scale" }),
        __metadata("design:type", Boolean)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "autoScale", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "count", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", Object)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_nodes" }),
        __metadata("design:type", Number)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "maxNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min_nodes" }),
        __metadata("design:type", Number)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "minNodes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=taints", elemType: UpdateKubernetesNodePoolRequestBodyTaints }),
        __metadata("design:type", Array)
    ], UpdateKubernetesNodePoolRequestBodyInput.prototype, "taints", void 0);
    return UpdateKubernetesNodePoolRequestBodyInput;
}(utils_1.SpeakeasyBase));
exports.UpdateKubernetesNodePoolRequestBodyInput = UpdateKubernetesNodePoolRequestBodyInput;
var UpdateKubernetesNodePool401ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateKubernetesNodePool401ApplicationJson, _super);
    function UpdateKubernetesNodePool401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePool401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePool401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePool401ApplicationJson.prototype, "requestId", void 0);
    return UpdateKubernetesNodePool401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateKubernetesNodePool401ApplicationJson = UpdateKubernetesNodePool401ApplicationJson;
var UpdateKubernetesNodePoolRequest = /** @class */ (function (_super) {
    __extends(UpdateKubernetesNodePoolRequest, _super);
    function UpdateKubernetesNodePoolRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateKubernetesNodePoolPathParams)
    ], UpdateKubernetesNodePoolRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateKubernetesNodePoolRequestBodyInput)
    ], UpdateKubernetesNodePoolRequest.prototype, "request", void 0);
    return UpdateKubernetesNodePoolRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateKubernetesNodePoolRequest = UpdateKubernetesNodePoolRequest;
var UpdateKubernetesNodePoolResponse = /** @class */ (function (_super) {
    __extends(UpdateKubernetesNodePoolResponse, _super);
    function UpdateKubernetesNodePoolResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateKubernetesNodePoolResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateKubernetesNodePoolResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateKubernetesNodePoolResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateKubernetesNodePoolResponse.prototype, "updateKubernetesNodePool202ApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateKubernetesNodePool401ApplicationJson)
    ], UpdateKubernetesNodePoolResponse.prototype, "updateKubernetesNodePool401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], UpdateKubernetesNodePoolResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return UpdateKubernetesNodePoolResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateKubernetesNodePoolResponse = UpdateKubernetesNodePoolResponse;
