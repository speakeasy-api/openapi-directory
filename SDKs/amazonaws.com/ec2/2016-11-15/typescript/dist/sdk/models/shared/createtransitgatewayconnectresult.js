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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTransitGatewayConnectResult = exports.CreateTransitGatewayConnectResultTransitGatewayConnect = exports.CreateTransitGatewayConnectResultTransitGatewayConnectOptions = void 0;
var utils_1 = require("../../../internal/utils");
// CreateTransitGatewayConnectResultTransitGatewayConnectOptions
/**
 * The Connect attachment options.
**/
var CreateTransitGatewayConnectResultTransitGatewayConnectOptions = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectResultTransitGatewayConnectOptions, _super);
    function CreateTransitGatewayConnectResultTransitGatewayConnectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnectOptions.prototype, "protocol", void 0);
    return CreateTransitGatewayConnectResultTransitGatewayConnectOptions;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayConnectResultTransitGatewayConnectOptions = CreateTransitGatewayConnectResultTransitGatewayConnectOptions;
// CreateTransitGatewayConnectResultTransitGatewayConnect
/**
 * Information about the Connect attachment.
**/
var CreateTransitGatewayConnectResultTransitGatewayConnect = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectResultTransitGatewayConnect, _super);
    function CreateTransitGatewayConnectResultTransitGatewayConnect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "creationTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayConnectResultTransitGatewayConnectOptions)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "transitGatewayAttachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "transitGatewayId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateTransitGatewayConnectResultTransitGatewayConnect.prototype, "transportTransitGatewayAttachmentId", void 0);
    return CreateTransitGatewayConnectResultTransitGatewayConnect;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayConnectResultTransitGatewayConnect = CreateTransitGatewayConnectResultTransitGatewayConnect;
var CreateTransitGatewayConnectResult = /** @class */ (function (_super) {
    __extends(CreateTransitGatewayConnectResult, _super);
    function CreateTransitGatewayConnectResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateTransitGatewayConnectResultTransitGatewayConnect)
    ], CreateTransitGatewayConnectResult.prototype, "transitGatewayConnect", void 0);
    return CreateTransitGatewayConnectResult;
}(utils_1.SpeakeasyBase));
exports.CreateTransitGatewayConnectResult = CreateTransitGatewayConnectResult;
