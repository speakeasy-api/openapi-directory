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
exports.CloudFormationStackRecord = void 0;
var utils_1 = require("../../../internal/utils");
var destinationinfo_1 = require("./destinationinfo");
var resourcelocation_1 = require("./resourcelocation");
var resourcetypeenum_1 = require("./resourcetypeenum");
var cloudformationstackrecordsourceinfo_1 = require("./cloudformationstackrecordsourceinfo");
var recordstateenum_1 = require("./recordstateenum");
// CloudFormationStackRecord
/**
 * <p>Describes a CloudFormation stack record created as a result of the <code>create cloud formation stack</code> action.</p> <p>A CloudFormation stack record provides information about the AWS CloudFormation stack used to create a new Amazon Elastic Compute Cloud instance from an exported Lightsail instance snapshot.</p>
**/
var CloudFormationStackRecord = /** @class */ (function (_super) {
    __extends(CloudFormationStackRecord, _super);
    function CloudFormationStackRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=arn" }),
        __metadata("design:type", String)
    ], CloudFormationStackRecord.prototype, "arn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createdAt" }),
        __metadata("design:type", Date)
    ], CloudFormationStackRecord.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destinationInfo" }),
        __metadata("design:type", destinationinfo_1.DestinationInfo)
    ], CloudFormationStackRecord.prototype, "destinationInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", resourcelocation_1.ResourceLocation)
    ], CloudFormationStackRecord.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CloudFormationStackRecord.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], CloudFormationStackRecord.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceInfo", elemType: cloudformationstackrecordsourceinfo_1.CloudFormationStackRecordSourceInfo }),
        __metadata("design:type", Array)
    ], CloudFormationStackRecord.prototype, "sourceInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CloudFormationStackRecord.prototype, "state", void 0);
    return CloudFormationStackRecord;
}(utils_1.SpeakeasyBase));
exports.CloudFormationStackRecord = CloudFormationStackRecord;
