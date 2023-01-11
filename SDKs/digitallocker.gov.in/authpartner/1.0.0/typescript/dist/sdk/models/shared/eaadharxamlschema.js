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
exports.EaadharXamlSchema = exports.EaadharXamlSchemaKycRes = exports.EaadharXamlSchemaKycResUidData = exports.EaadharXamlSchemaKycResUidDataPrn = exports.EaadharXamlSchemaKycResUidDataPoi = exports.EaadharXamlSchemaKycResUidDataPoa = exports.EaadharXamlSchemaKycResUidDataLData = exports.EaadharXamlSchemaKycResSignature = exports.EaadharXamlSchemaKycResSignatureSignedInfo = exports.EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod = exports.EaadharXamlSchemaKycResSignatureSignedInfoReference = exports.EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms = exports.EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform = exports.EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod = exports.EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod = exports.EaadharXamlSchemaKycResSignatureKeyInfo = exports.EaadharXamlSchemaKycResSignatureKeyInfoX509Data = void 0;
var utils_1 = require("../../../internal/utils");
var EaadharXamlSchemaKycResSignatureKeyInfoX509Data = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureKeyInfoX509Data, _super);
    function EaadharXamlSchemaKycResSignatureKeyInfoX509Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureKeyInfoX509Data.prototype, "x509Certificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureKeyInfoX509Data.prototype, "x509SubjectName", void 0);
    return EaadharXamlSchemaKycResSignatureKeyInfoX509Data;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureKeyInfoX509Data = EaadharXamlSchemaKycResSignatureKeyInfoX509Data;
var EaadharXamlSchemaKycResSignatureKeyInfo = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureKeyInfo, _super);
    function EaadharXamlSchemaKycResSignatureKeyInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureKeyInfoX509Data)
    ], EaadharXamlSchemaKycResSignatureKeyInfo.prototype, "x509Data", void 0);
    return EaadharXamlSchemaKycResSignatureKeyInfo;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureKeyInfo = EaadharXamlSchemaKycResSignatureKeyInfo;
var EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod.prototype, "algorithm", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod = EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod;
var EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod.prototype, "algorithm", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod = EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod;
var EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform.prototype, "algorithm", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform = EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform;
var EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransformsTransform)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms.prototype, "transform", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms = EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms;
var EaadharXamlSchemaKycResSignatureSignedInfoReference = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfoReference, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfoReference() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfoReferenceDigestMethod)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReference.prototype, "digestMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReference.prototype, "digestValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfoReferenceTransforms)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReference.prototype, "transforms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureSignedInfoReference.prototype, "uri", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfoReference;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfoReference = EaadharXamlSchemaKycResSignatureSignedInfoReference;
var EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod.prototype, "algorithm", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod = EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod;
var EaadharXamlSchemaKycResSignatureSignedInfo = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignatureSignedInfo, _super);
    function EaadharXamlSchemaKycResSignatureSignedInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfoCanonicalizationMethod)
    ], EaadharXamlSchemaKycResSignatureSignedInfo.prototype, "canonicalizationMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfoReference)
    ], EaadharXamlSchemaKycResSignatureSignedInfo.prototype, "reference", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfoSignatureMethod)
    ], EaadharXamlSchemaKycResSignatureSignedInfo.prototype, "signatureMethod", void 0);
    return EaadharXamlSchemaKycResSignatureSignedInfo;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignatureSignedInfo = EaadharXamlSchemaKycResSignatureSignedInfo;
var EaadharXamlSchemaKycResSignature = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResSignature, _super);
    function EaadharXamlSchemaKycResSignature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureKeyInfo)
    ], EaadharXamlSchemaKycResSignature.prototype, "keyInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignature.prototype, "signatureValue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignatureSignedInfo)
    ], EaadharXamlSchemaKycResSignature.prototype, "signedInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResSignature.prototype, "xmlns", void 0);
    return EaadharXamlSchemaKycResSignature;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResSignature = EaadharXamlSchemaKycResSignature;
var EaadharXamlSchemaKycResUidDataLData = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResUidDataLData, _super);
    function EaadharXamlSchemaKycResUidDataLData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "co", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "dist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "lang", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "lm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "loc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "pc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataLData.prototype, "vtc", void 0);
    return EaadharXamlSchemaKycResUidDataLData;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResUidDataLData = EaadharXamlSchemaKycResUidDataLData;
var EaadharXamlSchemaKycResUidDataPoa = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResUidDataPoa, _super);
    function EaadharXamlSchemaKycResUidDataPoa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "co", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "dist", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "lm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "loc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "pc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoa.prototype, "vtc", void 0);
    return EaadharXamlSchemaKycResUidDataPoa;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResUidDataPoa = EaadharXamlSchemaKycResUidDataPoa;
var EaadharXamlSchemaKycResUidDataPoi = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResUidDataPoi, _super);
    function EaadharXamlSchemaKycResUidDataPoi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoi.prototype, "dob", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoi.prototype, "gender", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPoi.prototype, "name", void 0);
    return EaadharXamlSchemaKycResUidDataPoi;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResUidDataPoi = EaadharXamlSchemaKycResUidDataPoi;
var EaadharXamlSchemaKycResUidDataPrn = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResUidDataPrn, _super);
    function EaadharXamlSchemaKycResUidDataPrn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPrn.prototype, "text", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidDataPrn.prototype, "type", void 0);
    return EaadharXamlSchemaKycResUidDataPrn;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResUidDataPrn = EaadharXamlSchemaKycResUidDataPrn;
var EaadharXamlSchemaKycResUidData = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycResUidData, _super);
    function EaadharXamlSchemaKycResUidData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResUidDataLData)
    ], EaadharXamlSchemaKycResUidData.prototype, "lData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidData.prototype, "pht", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResUidDataPoa)
    ], EaadharXamlSchemaKycResUidData.prototype, "poa", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResUidDataPoi)
    ], EaadharXamlSchemaKycResUidData.prototype, "poi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResUidDataPrn)
    ], EaadharXamlSchemaKycResUidData.prototype, "prn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidData.prototype, "tkn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycResUidData.prototype, "uid", void 0);
    return EaadharXamlSchemaKycResUidData;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycResUidData = EaadharXamlSchemaKycResUidData;
var EaadharXamlSchemaKycRes = /** @class */ (function (_super) {
    __extends(EaadharXamlSchemaKycRes, _super);
    function EaadharXamlSchemaKycRes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycRes.prototype, "rar", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResSignature)
    ], EaadharXamlSchemaKycRes.prototype, "signature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycResUidData)
    ], EaadharXamlSchemaKycRes.prototype, "uidData", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycRes.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycRes.prototype, "ret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycRes.prototype, "ts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycRes.prototype, "ttl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EaadharXamlSchemaKycRes.prototype, "txn", void 0);
    return EaadharXamlSchemaKycRes;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchemaKycRes = EaadharXamlSchemaKycRes;
var EaadharXamlSchema = /** @class */ (function (_super) {
    __extends(EaadharXamlSchema, _super);
    function EaadharXamlSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EaadharXamlSchemaKycRes)
    ], EaadharXamlSchema.prototype, "kycRes", void 0);
    return EaadharXamlSchema;
}(utils_1.SpeakeasyBase));
exports.EaadharXamlSchema = EaadharXamlSchema;
