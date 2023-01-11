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
exports.Configuration = void 0;
var utils_1 = require("../../../internal/utils");
var iamroleconfiguration_1 = require("./iamroleconfiguration");
var kmskeyconfiguration_1 = require("./kmskeyconfiguration");
var s3bucketconfiguration_1 = require("./s3bucketconfiguration");
var secretsmanagersecretconfiguration_1 = require("./secretsmanagersecretconfiguration");
var sqsqueueconfiguration_1 = require("./sqsqueueconfiguration");
var Configuration = /** @class */ (function (_super) {
    __extends(Configuration, _super);
    function Configuration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=iamRole" }),
        __metadata("design:type", iamroleconfiguration_1.IamRoleConfiguration)
    ], Configuration.prototype, "iamRole", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kmsKey" }),
        __metadata("design:type", kmskeyconfiguration_1.KmsKeyConfiguration)
    ], Configuration.prototype, "kmsKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3Bucket" }),
        __metadata("design:type", s3bucketconfiguration_1.S3BucketConfiguration)
    ], Configuration.prototype, "s3Bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secretsManagerSecret" }),
        __metadata("design:type", secretsmanagersecretconfiguration_1.SecretsManagerSecretConfiguration)
    ], Configuration.prototype, "secretsManagerSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sqsQueue" }),
        __metadata("design:type", sqsqueueconfiguration_1.SqsQueueConfiguration)
    ], Configuration.prototype, "sqsQueue", void 0);
    return Configuration;
}(utils_1.SpeakeasyBase));
exports.Configuration = Configuration;
