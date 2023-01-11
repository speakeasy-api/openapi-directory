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
exports.UpdatePushDeviceDetailsResponseOutput = exports.UpdatePushDeviceDetailsRequest = exports.UpdatePushDeviceDetailsHeaders = exports.UpdatePushDeviceDetailsQueryParams = exports.UpdatePushDeviceDetailsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdatePushDeviceDetailsPathParams = /** @class */ (function (_super) {
    __extends(UpdatePushDeviceDetailsPathParams, _super);
    function UpdatePushDeviceDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=device_id" }),
        __metadata("design:type", String)
    ], UpdatePushDeviceDetailsPathParams.prototype, "deviceId", void 0);
    return UpdatePushDeviceDetailsPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePushDeviceDetailsPathParams = UpdatePushDeviceDetailsPathParams;
var UpdatePushDeviceDetailsQueryParams = /** @class */ (function (_super) {
    __extends(UpdatePushDeviceDetailsQueryParams, _super);
    function UpdatePushDeviceDetailsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], UpdatePushDeviceDetailsQueryParams.prototype, "format", void 0);
    return UpdatePushDeviceDetailsQueryParams;
}(utils_1.SpeakeasyBase));
exports.UpdatePushDeviceDetailsQueryParams = UpdatePushDeviceDetailsQueryParams;
var UpdatePushDeviceDetailsHeaders = /** @class */ (function (_super) {
    __extends(UpdatePushDeviceDetailsHeaders, _super);
    function UpdatePushDeviceDetailsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Ably-Version" }),
        __metadata("design:type", String)
    ], UpdatePushDeviceDetailsHeaders.prototype, "xAblyVersion", void 0);
    return UpdatePushDeviceDetailsHeaders;
}(utils_1.SpeakeasyBase));
exports.UpdatePushDeviceDetailsHeaders = UpdatePushDeviceDetailsHeaders;
var UpdatePushDeviceDetailsRequest = /** @class */ (function (_super) {
    __extends(UpdatePushDeviceDetailsRequest, _super);
    function UpdatePushDeviceDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePushDeviceDetailsPathParams)
    ], UpdatePushDeviceDetailsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePushDeviceDetailsQueryParams)
    ], UpdatePushDeviceDetailsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdatePushDeviceDetailsHeaders)
    ], UpdatePushDeviceDetailsRequest.prototype, "headers", void 0);
    return UpdatePushDeviceDetailsRequest;
}(utils_1.SpeakeasyBase));
exports.UpdatePushDeviceDetailsRequest = UpdatePushDeviceDetailsRequest;
var UpdatePushDeviceDetailsResponseOutput = /** @class */ (function (_super) {
    __extends(UpdatePushDeviceDetailsResponseOutput, _super);
    function UpdatePushDeviceDetailsResponseOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdatePushDeviceDetailsResponseOutput.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdatePushDeviceDetailsResponseOutput.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DeviceDetailsOutput)
    ], UpdatePushDeviceDetailsResponseOutput.prototype, "deviceDetails", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], UpdatePushDeviceDetailsResponseOutput.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdatePushDeviceDetailsResponseOutput.prototype, "statusCode", void 0);
    return UpdatePushDeviceDetailsResponseOutput;
}(utils_1.SpeakeasyBase));
exports.UpdatePushDeviceDetailsResponseOutput = UpdatePushDeviceDetailsResponseOutput;
