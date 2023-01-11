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
exports.RevisionLocation = void 0;
var utils_1 = require("../../../internal/utils");
var appspeccontent_1 = require("./appspeccontent");
var githublocation_1 = require("./githublocation");
var revisionlocationtypeenum_1 = require("./revisionlocationtypeenum");
var s3location_1 = require("./s3location");
var rawstring_1 = require("./rawstring");
// RevisionLocation
/**
 * Information about the location of an application revision.
**/
var RevisionLocation = /** @class */ (function (_super) {
    __extends(RevisionLocation, _super);
    function RevisionLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=appSpecContent" }),
        __metadata("design:type", appspeccontent_1.AppSpecContent)
    ], RevisionLocation.prototype, "appSpecContent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gitHubLocation" }),
        __metadata("design:type", githublocation_1.GitHubLocation)
    ], RevisionLocation.prototype, "gitHubLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=revisionType" }),
        __metadata("design:type", String)
    ], RevisionLocation.prototype, "revisionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=s3Location" }),
        __metadata("design:type", s3location_1.S3Location)
    ], RevisionLocation.prototype, "s3Location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=string" }),
        __metadata("design:type", rawstring_1.RawString)
    ], RevisionLocation.prototype, "string", void 0);
    return RevisionLocation;
}(utils_1.SpeakeasyBase));
exports.RevisionLocation = RevisionLocation;
