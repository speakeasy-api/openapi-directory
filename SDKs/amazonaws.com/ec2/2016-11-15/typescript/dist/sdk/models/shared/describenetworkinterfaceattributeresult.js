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
exports.DescribeNetworkInterfaceAttributeResult = exports.DescribeNetworkInterfaceAttributeResultSourceDestCheck = exports.DescribeNetworkInterfaceAttributeResultDescription = exports.DescribeNetworkInterfaceAttributeResultAttachment = void 0;
var utils_1 = require("../../../internal/utils");
// DescribeNetworkInterfaceAttributeResultAttachment
/**
 * The attachment (if any) of the network interface.
**/
var DescribeNetworkInterfaceAttributeResultAttachment = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfaceAttributeResultAttachment, _super);
    function DescribeNetworkInterfaceAttributeResultAttachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "attachTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "attachmentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "deleteOnTermination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "deviceIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "instanceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "instanceOwnerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "networkCardIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultAttachment.prototype, "status", void 0);
    return DescribeNetworkInterfaceAttributeResultAttachment;
}(utils_1.SpeakeasyBase));
exports.DescribeNetworkInterfaceAttributeResultAttachment = DescribeNetworkInterfaceAttributeResultAttachment;
// DescribeNetworkInterfaceAttributeResultDescription
/**
 * The description of the network interface.
**/
var DescribeNetworkInterfaceAttributeResultDescription = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfaceAttributeResultDescription, _super);
    function DescribeNetworkInterfaceAttributeResultDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultDescription.prototype, "value", void 0);
    return DescribeNetworkInterfaceAttributeResultDescription;
}(utils_1.SpeakeasyBase));
exports.DescribeNetworkInterfaceAttributeResultDescription = DescribeNetworkInterfaceAttributeResultDescription;
// DescribeNetworkInterfaceAttributeResultSourceDestCheck
/**
 * Indicates whether source/destination checking is enabled.
**/
var DescribeNetworkInterfaceAttributeResultSourceDestCheck = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfaceAttributeResultSourceDestCheck, _super);
    function DescribeNetworkInterfaceAttributeResultSourceDestCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResultSourceDestCheck.prototype, "value", void 0);
    return DescribeNetworkInterfaceAttributeResultSourceDestCheck;
}(utils_1.SpeakeasyBase));
exports.DescribeNetworkInterfaceAttributeResultSourceDestCheck = DescribeNetworkInterfaceAttributeResultSourceDestCheck;
// DescribeNetworkInterfaceAttributeResult
/**
 * Contains the output of DescribeNetworkInterfaceAttribute.
**/
var DescribeNetworkInterfaceAttributeResult = /** @class */ (function (_super) {
    __extends(DescribeNetworkInterfaceAttributeResult, _super);
    function DescribeNetworkInterfaceAttributeResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeNetworkInterfaceAttributeResultAttachment)
    ], DescribeNetworkInterfaceAttributeResult.prototype, "attachment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeNetworkInterfaceAttributeResultDescription)
    ], DescribeNetworkInterfaceAttributeResult.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResult.prototype, "groups", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], DescribeNetworkInterfaceAttributeResult.prototype, "networkInterfaceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DescribeNetworkInterfaceAttributeResultSourceDestCheck)
    ], DescribeNetworkInterfaceAttributeResult.prototype, "sourceDestCheck", void 0);
    return DescribeNetworkInterfaceAttributeResult;
}(utils_1.SpeakeasyBase));
exports.DescribeNetworkInterfaceAttributeResult = DescribeNetworkInterfaceAttributeResult;
