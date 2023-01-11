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
exports.ProtocolSnmpv3GetConfigResponse = exports.ProtocolSnmpv3GetConfigRequest = exports.ProtocolSnmpv3GetConfigPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ProtocolSnmpv3GetConfigPathParams = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3GetConfigPathParams, _super);
    function ProtocolSnmpv3GetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=agentNum" }),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3GetConfigPathParams.prototype, "agentNum", void 0);
    return ProtocolSnmpv3GetConfigPathParams;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3GetConfigPathParams = ProtocolSnmpv3GetConfigPathParams;
var ProtocolSnmpv3GetConfigRequest = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3GetConfigRequest, _super);
    function ProtocolSnmpv3GetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ProtocolSnmpv3GetConfigPathParams)
    ], ProtocolSnmpv3GetConfigRequest.prototype, "pathParams", void 0);
    return ProtocolSnmpv3GetConfigRequest;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3GetConfigRequest = ProtocolSnmpv3GetConfigRequest;
var ProtocolSnmpv3GetConfigResponse = /** @class */ (function (_super) {
    __extends(ProtocolSnmpv3GetConfigResponse, _super);
    function ProtocolSnmpv3GetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ConfigSnmPv3)
    ], ProtocolSnmpv3GetConfigResponse.prototype, "configSNMPv3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ProtocolSnmpv3GetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ProtocolSnmpv3GetConfigResponse.prototype, "statusCode", void 0);
    return ProtocolSnmpv3GetConfigResponse;
}(utils_1.SpeakeasyBase));
exports.ProtocolSnmpv3GetConfigResponse = ProtocolSnmpv3GetConfigResponse;
