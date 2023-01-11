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
exports.GetClusterUserResponse = exports.GetClusterUserRequest = exports.GetClusterUser401ApplicationJson = exports.GetClusterUser200ApplicationJson = exports.GetClusterUser200ApplicationJsonKubernetesClusterUser = exports.GetClusterUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetClusterUserPathParams = /** @class */ (function (_super) {
    __extends(GetClusterUserPathParams, _super);
    function GetClusterUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=cluster_id" }),
        __metadata("design:type", String)
    ], GetClusterUserPathParams.prototype, "clusterId", void 0);
    return GetClusterUserPathParams;
}(utils_1.SpeakeasyBase));
exports.GetClusterUserPathParams = GetClusterUserPathParams;
var GetClusterUser200ApplicationJsonKubernetesClusterUser = /** @class */ (function (_super) {
    __extends(GetClusterUser200ApplicationJsonKubernetesClusterUser, _super);
    function GetClusterUser200ApplicationJsonKubernetesClusterUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=groups" }),
        __metadata("design:type", Array)
    ], GetClusterUser200ApplicationJsonKubernetesClusterUser.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], GetClusterUser200ApplicationJsonKubernetesClusterUser.prototype, "username", void 0);
    return GetClusterUser200ApplicationJsonKubernetesClusterUser;
}(utils_1.SpeakeasyBase));
exports.GetClusterUser200ApplicationJsonKubernetesClusterUser = GetClusterUser200ApplicationJsonKubernetesClusterUser;
var GetClusterUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetClusterUser200ApplicationJson, _super);
    function GetClusterUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kubernetes_cluster_user" }),
        __metadata("design:type", GetClusterUser200ApplicationJsonKubernetesClusterUser)
    ], GetClusterUser200ApplicationJson.prototype, "kubernetesClusterUser", void 0);
    return GetClusterUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetClusterUser200ApplicationJson = GetClusterUser200ApplicationJson;
var GetClusterUser401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetClusterUser401ApplicationJson, _super);
    function GetClusterUser401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetClusterUser401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetClusterUser401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetClusterUser401ApplicationJson.prototype, "requestId", void 0);
    return GetClusterUser401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetClusterUser401ApplicationJson = GetClusterUser401ApplicationJson;
var GetClusterUserRequest = /** @class */ (function (_super) {
    __extends(GetClusterUserRequest, _super);
    function GetClusterUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterUserPathParams)
    ], GetClusterUserRequest.prototype, "pathParams", void 0);
    return GetClusterUserRequest;
}(utils_1.SpeakeasyBase));
exports.GetClusterUserRequest = GetClusterUserRequest;
var GetClusterUserResponse = /** @class */ (function (_super) {
    __extends(GetClusterUserResponse, _super);
    function GetClusterUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetClusterUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetClusterUserResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetClusterUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterUser200ApplicationJson)
    ], GetClusterUserResponse.prototype, "getClusterUser200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetClusterUser401ApplicationJson)
    ], GetClusterUserResponse.prototype, "getClusterUser401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetClusterUserResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetClusterUserResponse;
}(utils_1.SpeakeasyBase));
exports.GetClusterUserResponse = GetClusterUserResponse;
