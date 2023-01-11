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
exports.SourceCodeType = void 0;
var utils_1 = require("../../../internal/utils");
var branchdiffsourcecodetype_1 = require("./branchdiffsourcecodetype");
var commitdiffsourcecodetype_1 = require("./commitdiffsourcecodetype");
var repositoryheadsourcecodetype_1 = require("./repositoryheadsourcecodetype");
var requestmetadata_1 = require("./requestmetadata");
var s3bucketrepository_1 = require("./s3bucketrepository");
// SourceCodeType
/**
 *  Specifies the source code that is analyzed in a code review.
**/
var SourceCodeType = /** @class */ (function (_super) {
    __extends(SourceCodeType, _super);
    function SourceCodeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=BranchDiff" }),
        __metadata("design:type", branchdiffsourcecodetype_1.BranchDiffSourceCodeType)
    ], SourceCodeType.prototype, "branchDiff", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CommitDiff" }),
        __metadata("design:type", commitdiffsourcecodetype_1.CommitDiffSourceCodeType)
    ], SourceCodeType.prototype, "commitDiff", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RepositoryHead" }),
        __metadata("design:type", repositoryheadsourcecodetype_1.RepositoryHeadSourceCodeType)
    ], SourceCodeType.prototype, "repositoryHead", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RequestMetadata" }),
        __metadata("design:type", requestmetadata_1.RequestMetadata)
    ], SourceCodeType.prototype, "requestMetadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=S3BucketRepository" }),
        __metadata("design:type", s3bucketrepository_1.S3BucketRepository)
    ], SourceCodeType.prototype, "s3BucketRepository", void 0);
    return SourceCodeType;
}(utils_1.SpeakeasyBase));
exports.SourceCodeType = SourceCodeType;
