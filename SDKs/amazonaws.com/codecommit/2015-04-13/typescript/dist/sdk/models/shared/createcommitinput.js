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
exports.CreateCommitInput = void 0;
var utils_1 = require("../../../internal/utils");
var deletefileentry_1 = require("./deletefileentry");
var putfileentry_1 = require("./putfileentry");
var setfilemodeentry_1 = require("./setfilemodeentry");
var CreateCommitInput = /** @class */ (function (_super) {
    __extends(CreateCommitInput, _super);
    function CreateCommitInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=authorName" }),
        __metadata("design:type", String)
    ], CreateCommitInput.prototype, "authorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=branchName" }),
        __metadata("design:type", String)
    ], CreateCommitInput.prototype, "branchName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=commitMessage" }),
        __metadata("design:type", String)
    ], CreateCommitInput.prototype, "commitMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deleteFiles", elemType: deletefileentry_1.DeleteFileEntry }),
        __metadata("design:type", Array)
    ], CreateCommitInput.prototype, "deleteFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateCommitInput.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=keepEmptyFolders" }),
        __metadata("design:type", Boolean)
    ], CreateCommitInput.prototype, "keepEmptyFolders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parentCommitId" }),
        __metadata("design:type", String)
    ], CreateCommitInput.prototype, "parentCommitId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=putFiles", elemType: putfileentry_1.PutFileEntry }),
        __metadata("design:type", Array)
    ], CreateCommitInput.prototype, "putFiles", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repositoryName" }),
        __metadata("design:type", String)
    ], CreateCommitInput.prototype, "repositoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=setFileModes", elemType: setfilemodeentry_1.SetFileModeEntry }),
        __metadata("design:type", Array)
    ], CreateCommitInput.prototype, "setFileModes", void 0);
    return CreateCommitInput;
}(utils_1.SpeakeasyBase));
exports.CreateCommitInput = CreateCommitInput;
