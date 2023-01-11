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
exports.PutOrdersIdShipResponse = exports.PutOrdersIdShipRequest = exports.PutOrdersIdShipSecurity = exports.PutOrdersIdShipOrderShipV2 = exports.PutOrdersIdShipPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PutOrdersIdShipPathParams = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipPathParams, _super);
    function PutOrdersIdShipPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutOrdersIdShipPathParams.prototype, "id", void 0);
    return PutOrdersIdShipPathParams;
}(utils_1.SpeakeasyBase));
exports.PutOrdersIdShipPathParams = PutOrdersIdShipPathParams;
var PutOrdersIdShipOrderShipV2 = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipOrderShipV2, _super);
    function PutOrdersIdShipOrderShipV2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=trackingNumber" }),
        __metadata("design:type", String)
    ], PutOrdersIdShipOrderShipV2.prototype, "trackingNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=weightOverride" }),
        __metadata("design:type", Number)
    ], PutOrdersIdShipOrderShipV2.prototype, "weightOverride", void 0);
    return PutOrdersIdShipOrderShipV2;
}(utils_1.SpeakeasyBase));
exports.PutOrdersIdShipOrderShipV2 = PutOrdersIdShipOrderShipV2;
var PutOrdersIdShipSecurity = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipSecurity, _super);
    function PutOrdersIdShipSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeFdcAuth)
    ], PutOrdersIdShipSecurity.prototype, "fdcAuth", void 0);
    return PutOrdersIdShipSecurity;
}(utils_1.SpeakeasyBase));
exports.PutOrdersIdShipSecurity = PutOrdersIdShipSecurity;
var PutOrdersIdShipRequest = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipRequest, _super);
    function PutOrdersIdShipRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutOrdersIdShipPathParams)
    ], PutOrdersIdShipRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutOrdersIdShipOrderShipV2)
    ], PutOrdersIdShipRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PutOrdersIdShipSecurity)
    ], PutOrdersIdShipRequest.prototype, "security", void 0);
    return PutOrdersIdShipRequest;
}(utils_1.SpeakeasyBase));
exports.PutOrdersIdShipRequest = PutOrdersIdShipRequest;
var PutOrdersIdShipResponse = /** @class */ (function (_super) {
    __extends(PutOrdersIdShipResponse, _super);
    function PutOrdersIdShipResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PutOrdersIdShipResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PutOrdersIdShipResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.OneordersPostResponses201ContentApplication1jsonSchema)
    ], PutOrdersIdShipResponse.prototype, "oneordersPostResponses201ContentApplication1jsonSchema", void 0);
    return PutOrdersIdShipResponse;
}(utils_1.SpeakeasyBase));
exports.PutOrdersIdShipResponse = PutOrdersIdShipResponse;
