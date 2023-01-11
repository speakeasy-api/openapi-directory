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
exports.RepositoryAnalysis = void 0;
var utils_1 = require("../../../internal/utils");
var repositoryheadsourcecodetype_1 = require("./repositoryheadsourcecodetype");
var sourcecodetype_1 = require("./sourcecodetype");
// RepositoryAnalysis
/**
 *  A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>.
**/
var RepositoryAnalysis = /** @class */ (function (_super) {
    __extends(RepositoryAnalysis, _super);
    function RepositoryAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RepositoryHead" }),
        __metadata("design:type", repositoryheadsourcecodetype_1.RepositoryHeadSourceCodeType)
    ], RepositoryAnalysis.prototype, "repositoryHead", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SourceCodeType" }),
        __metadata("design:type", sourcecodetype_1.SourceCodeType)
    ], RepositoryAnalysis.prototype, "sourceCodeType", void 0);
    return RepositoryAnalysis;
}(utils_1.SpeakeasyBase));
exports.RepositoryAnalysis = RepositoryAnalysis;
