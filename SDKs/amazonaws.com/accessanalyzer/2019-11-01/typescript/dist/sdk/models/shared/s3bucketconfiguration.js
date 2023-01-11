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
exports.S3BucketConfiguration = void 0;
var utils_1 = require("../../../internal/utils");
var s3accesspointconfiguration_1 = require("./s3accesspointconfiguration");
var s3bucketaclgrantconfiguration_1 = require("./s3bucketaclgrantconfiguration");
var s3publicaccessblockconfiguration_1 = require("./s3publicaccessblockconfiguration");
// S3BucketConfiguration
/**
 * Proposed access control configuration for an Amazon S3 bucket. You can propose a configuration for a new Amazon S3 bucket or an existing Amazon S3 bucket that you own by specifying the Amazon S3 bucket policy, bucket ACLs, bucket BPA settings, Amazon S3 access points, and multi-region access points attached to the bucket. If the configuration is for an existing Amazon S3 bucket and you do not specify the Amazon S3 bucket policy, the access preview uses the existing policy attached to the bucket. If the access preview is for a new resource and you do not specify the Amazon S3 bucket policy, the access preview assumes a bucket without a policy. To propose deletion of an existing bucket policy, you can specify an empty string. For more information about bucket policy limits, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html">Bucket Policy Examples</a>.
**/
var S3BucketConfiguration = /** @class */ (function (_super) {
    __extends(S3BucketConfiguration, _super);
    function S3BucketConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=accessPoints", elemType: s3accesspointconfiguration_1.S3AccessPointConfiguration }),
        __metadata("design:type", Object)
    ], S3BucketConfiguration.prototype, "accessPoints", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketAclGrants", elemType: s3bucketaclgrantconfiguration_1.S3BucketAclGrantConfiguration }),
        __metadata("design:type", Array)
    ], S3BucketConfiguration.prototype, "bucketAclGrants", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketPolicy" }),
        __metadata("design:type", String)
    ], S3BucketConfiguration.prototype, "bucketPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bucketPublicAccessBlock" }),
        __metadata("design:type", s3publicaccessblockconfiguration_1.S3PublicAccessBlockConfiguration)
    ], S3BucketConfiguration.prototype, "bucketPublicAccessBlock", void 0);
    return S3BucketConfiguration;
}(utils_1.SpeakeasyBase));
exports.S3BucketConfiguration = S3BucketConfiguration;
