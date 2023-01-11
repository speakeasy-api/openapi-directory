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
exports.CrawlerTargets = void 0;
var utils_1 = require("../../../internal/utils");
var catalogtarget_1 = require("./catalogtarget");
var dynamodbtarget_1 = require("./dynamodbtarget");
var jdbctarget_1 = require("./jdbctarget");
var mongodbtarget_1 = require("./mongodbtarget");
var s3target_1 = require("./s3target");
// CrawlerTargets
/**
 * Specifies data stores to crawl.
**/
var CrawlerTargets = /** @class */ (function (_super) {
    __extends(CrawlerTargets, _super);
    function CrawlerTargets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CatalogTargets", elemType: catalogtarget_1.CatalogTarget }),
        __metadata("design:type", Array)
    ], CrawlerTargets.prototype, "catalogTargets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DynamoDBTargets", elemType: dynamodbtarget_1.DynamoDbTarget }),
        __metadata("design:type", Array)
    ], CrawlerTargets.prototype, "dynamoDBTargets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=JdbcTargets", elemType: jdbctarget_1.JdbcTarget }),
        __metadata("design:type", Array)
    ], CrawlerTargets.prototype, "jdbcTargets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MongoDBTargets", elemType: mongodbtarget_1.MongoDbTarget }),
        __metadata("design:type", Array)
    ], CrawlerTargets.prototype, "mongoDBTargets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=S3Targets", elemType: s3target_1.S3Target }),
        __metadata("design:type", Array)
    ], CrawlerTargets.prototype, "s3Targets", void 0);
    return CrawlerTargets;
}(utils_1.SpeakeasyBase));
exports.CrawlerTargets = CrawlerTargets;
