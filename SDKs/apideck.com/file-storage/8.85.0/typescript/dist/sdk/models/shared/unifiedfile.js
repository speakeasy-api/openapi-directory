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
exports.UnifiedFile = void 0;
var utils_1 = require("../../../internal/utils");
var owner_1 = require("./owner");
var linkedfolder_1 = require("./linkedfolder");
var filetypeenum_1 = require("./filetypeenum");
var UnifiedFile = /** @class */ (function (_super) {
    __extends(UnifiedFile, _super);
    function UnifiedFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], UnifiedFile.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downloadable" }),
        __metadata("design:type", Boolean)
    ], UnifiedFile.prototype, "downloadable", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=downstream_id" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "downstreamId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mime_type" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "mimeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", owner_1.Owner)
    ], UnifiedFile.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_folders", elemType: linkedfolder_1.LinkedFolder }),
        __metadata("design:type", Array)
    ], UnifiedFile.prototype, "parentFolders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent_folders_complete" }),
        __metadata("design:type", Boolean)
    ], UnifiedFile.prototype, "parentFoldersComplete", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "path", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], UnifiedFile.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], UnifiedFile.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_by" }),
        __metadata("design:type", String)
    ], UnifiedFile.prototype, "updatedBy", void 0);
    return UnifiedFile;
}(utils_1.SpeakeasyBase));
exports.UnifiedFile = UnifiedFile;
