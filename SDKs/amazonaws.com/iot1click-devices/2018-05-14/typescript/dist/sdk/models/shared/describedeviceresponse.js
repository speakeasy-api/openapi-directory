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
exports.DescribeDeviceResponse = exports.DescribeDeviceResponseDeviceDescription = void 0;
var utils_1 = require("../../../internal/utils");
// DescribeDeviceResponseDeviceDescription
/**
 * Device details.
**/
var DescribeDeviceResponseDeviceDescription = /** @class */ (function (_super) {
    __extends(DescribeDeviceResponseDeviceDescription, _super);
    function DescribeDeviceResponseDeviceDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Arn" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceId" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Enabled" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "enabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RemainingLife" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "remainingLife", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Type" }),
        __metadata("design:type", Object)
    ], DescribeDeviceResponseDeviceDescription.prototype, "type", void 0);
    return DescribeDeviceResponseDeviceDescription;
}(utils_1.SpeakeasyBase));
exports.DescribeDeviceResponseDeviceDescription = DescribeDeviceResponseDeviceDescription;
var DescribeDeviceResponse = /** @class */ (function (_super) {
    __extends(DescribeDeviceResponse, _super);
    function DescribeDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceDescription" }),
        __metadata("design:type", DescribeDeviceResponseDeviceDescription)
    ], DescribeDeviceResponse.prototype, "deviceDescription", void 0);
    return DescribeDeviceResponse;
}(utils_1.SpeakeasyBase));
exports.DescribeDeviceResponse = DescribeDeviceResponse;
