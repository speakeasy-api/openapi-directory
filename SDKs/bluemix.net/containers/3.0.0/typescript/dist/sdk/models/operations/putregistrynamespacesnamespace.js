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
exports.PutRegistryNamespacesNamespaceResponse = exports.PutRegistryNamespacesNamespaceRequest = exports.PutRegistryNamespacesNamespaceHeaders = exports.PutRegistryNamespacesNamespacePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutRegistryNamespacesNamespacePathParams = /** @class */ (function (_super) {
    __extends(PutRegistryNamespacesNamespacePathParams, _super);
    function PutRegistryNamespacesNamespacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=namespace" }),
        __metadata("design:type", String)
    ], PutRegistryNamespacesNamespacePathParams.prototype, "namespace", void 0);
    return PutRegistryNamespacesNamespacePathParams;
}(utils_1.SpeakeasyBase));
exports.PutRegistryNamespacesNamespacePathParams = PutRegistryNamespacesNamespacePathParams;
var PutRegistryNamespacesNamespaceHeaders = /** @class */ (function (_super) {
    __extends(PutRegistryNamespacesNamespaceHeaders, _super);
    function PutRegistryNamespacesNamespaceHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], PutRegistryNamespacesNamespaceHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], PutRegistryNamespacesNamespaceHeaders.prototype, "xAuthToken", void 0);
    return PutRegistryNamespacesNamespaceHeaders;
}(utils_1.SpeakeasyBase));
exports.PutRegistryNamespacesNamespaceHeaders = PutRegistryNamespacesNamespaceHeaders;
var PutRegistryNamespacesNamespaceRequest = /** @class */ (function (_super) {
    __extends(PutRegistryNamespacesNamespaceRequest, _super);
    function PutRegistryNamespacesNamespaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutRegistryNamespacesNamespacePathParams)
    ], PutRegistryNamespacesNamespaceRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutRegistryNamespacesNamespaceHeaders)
    ], PutRegistryNamespacesNamespaceRequest.prototype, "headers", void 0);
    return PutRegistryNamespacesNamespaceRequest;
}(utils_1.SpeakeasyBase));
exports.PutRegistryNamespacesNamespaceRequest = PutRegistryNamespacesNamespaceRequest;
var PutRegistryNamespacesNamespaceResponse = /** @class */ (function (_super) {
    __extends(PutRegistryNamespacesNamespaceResponse, _super);
    function PutRegistryNamespacesNamespaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutRegistryNamespacesNamespaceResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Namespace)
    ], PutRegistryNamespacesNamespaceResponse.prototype, "namespace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutRegistryNamespacesNamespaceResponse.prototype, "statusCode", void 0);
    return PutRegistryNamespacesNamespaceResponse;
}(utils_1.SpeakeasyBase));
exports.PutRegistryNamespacesNamespaceResponse = PutRegistryNamespacesNamespaceResponse;
