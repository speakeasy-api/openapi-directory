"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GitTree = exports.GitTreeTree = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var GitTreeTree = /** @class */ (function (_super) {
    __extends(GitTreeTree, _super);
    function GitTreeTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "mode" }),
        __metadata("design:type", String)
    ], GitTreeTree.prototype, "mode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "path" }),
        __metadata("design:type", String)
    ], GitTreeTree.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], GitTreeTree.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "size" }),
        __metadata("design:type", Number)
    ], GitTreeTree.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "type" }),
        __metadata("design:type", String)
    ], GitTreeTree.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], GitTreeTree.prototype, "url", void 0);
    return GitTreeTree;
}(utils_1.SpeakeasyBase));
exports.GitTreeTree = GitTreeTree;
/**
 * The hierarchy between files in a Git repository.
 */
var GitTree = /** @class */ (function (_super) {
    __extends(GitTree, _super);
    function GitTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sha" }),
        __metadata("design:type", String)
    ], GitTree.prototype, "sha", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: GitTreeTree }),
        (0, class_transformer_1.Expose)({ name: "tree" }),
        (0, class_transformer_1.Type)(function () { return GitTreeTree; }),
        __metadata("design:type", Array)
    ], GitTree.prototype, "tree", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "truncated" }),
        __metadata("design:type", Boolean)
    ], GitTree.prototype, "truncated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "url" }),
        __metadata("design:type", String)
    ], GitTree.prototype, "url", void 0);
    return GitTree;
}(utils_1.SpeakeasyBase));
exports.GitTree = GitTree;
