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
exports.CreateDefaultVpcResult = exports.CreateDefaultVpcResultVpc = void 0;
var utils_1 = require("../../../internal/utils");
// CreateDefaultVpcResultVpc
/**
 * Information about the VPC.
**/
var CreateDefaultVpcResultVpc = /** @class */ (function (_super) {
    __extends(CreateDefaultVpcResultVpc, _super);
    function CreateDefaultVpcResultVpc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "cidrBlock", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "cidrBlockAssociationSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "dhcpOptionsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "instanceTenancy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "ipv6CidrBlockAssociationSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "isDefault", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDefaultVpcResultVpc.prototype, "vpcId", void 0);
    return CreateDefaultVpcResultVpc;
}(utils_1.SpeakeasyBase));
exports.CreateDefaultVpcResultVpc = CreateDefaultVpcResultVpc;
var CreateDefaultVpcResult = /** @class */ (function (_super) {
    __extends(CreateDefaultVpcResult, _super);
    function CreateDefaultVpcResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDefaultVpcResultVpc)
    ], CreateDefaultVpcResult.prototype, "vpc", void 0);
    return CreateDefaultVpcResult;
}(utils_1.SpeakeasyBase));
exports.CreateDefaultVpcResult = CreateDefaultVpcResult;
