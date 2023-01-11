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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VhtaxResponse = exports.VhtaxRequest = exports.Vhtax504ApplicationJson = exports.Vhtax504ApplicationJsonErrorDescriptionEnum = exports.Vhtax504ApplicationJsonErrorEnum = exports.Vhtax503ApplicationJson = exports.Vhtax503ApplicationJsonErrorDescriptionEnum = exports.Vhtax503ApplicationJsonErrorEnum = exports.Vhtax502ApplicationJson = exports.Vhtax502ApplicationJsonErrorDescriptionEnum = exports.Vhtax502ApplicationJsonErrorEnum = exports.Vhtax500ApplicationJson = exports.Vhtax500ApplicationJsonErrorDescriptionEnum = exports.Vhtax500ApplicationJsonErrorEnum = exports.Vhtax404ApplicationJson = exports.Vhtax404ApplicationJsonErrorDescriptionEnum = exports.Vhtax404ApplicationJsonErrorEnum = exports.Vhtax401ApplicationJson = exports.Vhtax401ApplicationJsonErrorDescriptionEnum = exports.Vhtax401ApplicationJsonErrorEnum = exports.Vhtax400ApplicationJson = exports.Vhtax400ApplicationJsonErrorDescriptionEnum = exports.Vhtax400ApplicationJsonErrorEnum = exports.VhtaxSecurity = exports.VhtaxRequestBody = exports.VhtaxRequestBodyFormatEnum = exports.VhtaxRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var VhtaxRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(VhtaxRequestBodyCertificateParameters, _super);
    function VhtaxRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UID" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "uid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chasis_no" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "chasisNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reg_no" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "regNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=swd_name" }),
        __metadata("design:type", String)
    ], VhtaxRequestBodyCertificateParameters.prototype, "swdName", void 0);
    return VhtaxRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.VhtaxRequestBodyCertificateParameters = VhtaxRequestBodyCertificateParameters;
var VhtaxRequestBodyFormatEnum;
(function (VhtaxRequestBodyFormatEnum) {
    VhtaxRequestBodyFormatEnum["Pdf"] = "pdf";
})(VhtaxRequestBodyFormatEnum = exports.VhtaxRequestBodyFormatEnum || (exports.VhtaxRequestBodyFormatEnum = {}));
var VhtaxRequestBody = /** @class */ (function (_super) {
    __extends(VhtaxRequestBody, _super);
    function VhtaxRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", VhtaxRequestBodyCertificateParameters)
    ], VhtaxRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], VhtaxRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], VhtaxRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], VhtaxRequestBody.prototype, "txnId", void 0);
    return VhtaxRequestBody;
}(utils_1.SpeakeasyBase));
exports.VhtaxRequestBody = VhtaxRequestBody;
var VhtaxSecurity = /** @class */ (function (_super) {
    __extends(VhtaxSecurity, _super);
    function VhtaxSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], VhtaxSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], VhtaxSecurity.prototype, "clientId", void 0);
    return VhtaxSecurity;
}(utils_1.SpeakeasyBase));
exports.VhtaxSecurity = VhtaxSecurity;
var Vhtax400ApplicationJsonErrorEnum;
(function (Vhtax400ApplicationJsonErrorEnum) {
    Vhtax400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Vhtax400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Vhtax400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Vhtax400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Vhtax400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Vhtax400ApplicationJsonErrorEnum = exports.Vhtax400ApplicationJsonErrorEnum || (exports.Vhtax400ApplicationJsonErrorEnum = {}));
var Vhtax400ApplicationJsonErrorDescriptionEnum;
(function (Vhtax400ApplicationJsonErrorDescriptionEnum) {
    Vhtax400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Vhtax400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Vhtax400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Vhtax400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Vhtax400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Vhtax400ApplicationJsonErrorDescriptionEnum = exports.Vhtax400ApplicationJsonErrorDescriptionEnum || (exports.Vhtax400ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax400ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax400ApplicationJson, _super);
    function Vhtax400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax400ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax400ApplicationJson = Vhtax400ApplicationJson;
var Vhtax401ApplicationJsonErrorEnum;
(function (Vhtax401ApplicationJsonErrorEnum) {
    Vhtax401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Vhtax401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Vhtax401ApplicationJsonErrorEnum = exports.Vhtax401ApplicationJsonErrorEnum || (exports.Vhtax401ApplicationJsonErrorEnum = {}));
var Vhtax401ApplicationJsonErrorDescriptionEnum;
(function (Vhtax401ApplicationJsonErrorDescriptionEnum) {
    Vhtax401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Vhtax401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Vhtax401ApplicationJsonErrorDescriptionEnum = exports.Vhtax401ApplicationJsonErrorDescriptionEnum || (exports.Vhtax401ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax401ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax401ApplicationJson, _super);
    function Vhtax401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax401ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax401ApplicationJson = Vhtax401ApplicationJson;
var Vhtax404ApplicationJsonErrorEnum;
(function (Vhtax404ApplicationJsonErrorEnum) {
    Vhtax404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Vhtax404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Vhtax404ApplicationJsonErrorEnum = exports.Vhtax404ApplicationJsonErrorEnum || (exports.Vhtax404ApplicationJsonErrorEnum = {}));
var Vhtax404ApplicationJsonErrorDescriptionEnum;
(function (Vhtax404ApplicationJsonErrorDescriptionEnum) {
    Vhtax404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Vhtax404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Vhtax404ApplicationJsonErrorDescriptionEnum = exports.Vhtax404ApplicationJsonErrorDescriptionEnum || (exports.Vhtax404ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax404ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax404ApplicationJson, _super);
    function Vhtax404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax404ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax404ApplicationJson = Vhtax404ApplicationJson;
var Vhtax500ApplicationJsonErrorEnum;
(function (Vhtax500ApplicationJsonErrorEnum) {
    Vhtax500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Vhtax500ApplicationJsonErrorEnum = exports.Vhtax500ApplicationJsonErrorEnum || (exports.Vhtax500ApplicationJsonErrorEnum = {}));
var Vhtax500ApplicationJsonErrorDescriptionEnum;
(function (Vhtax500ApplicationJsonErrorDescriptionEnum) {
    Vhtax500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Vhtax500ApplicationJsonErrorDescriptionEnum = exports.Vhtax500ApplicationJsonErrorDescriptionEnum || (exports.Vhtax500ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax500ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax500ApplicationJson, _super);
    function Vhtax500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax500ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax500ApplicationJson = Vhtax500ApplicationJson;
var Vhtax502ApplicationJsonErrorEnum;
(function (Vhtax502ApplicationJsonErrorEnum) {
    Vhtax502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Vhtax502ApplicationJsonErrorEnum = exports.Vhtax502ApplicationJsonErrorEnum || (exports.Vhtax502ApplicationJsonErrorEnum = {}));
var Vhtax502ApplicationJsonErrorDescriptionEnum;
(function (Vhtax502ApplicationJsonErrorDescriptionEnum) {
    Vhtax502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Vhtax502ApplicationJsonErrorDescriptionEnum = exports.Vhtax502ApplicationJsonErrorDescriptionEnum || (exports.Vhtax502ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax502ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax502ApplicationJson, _super);
    function Vhtax502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax502ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax502ApplicationJson = Vhtax502ApplicationJson;
var Vhtax503ApplicationJsonErrorEnum;
(function (Vhtax503ApplicationJsonErrorEnum) {
    Vhtax503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Vhtax503ApplicationJsonErrorEnum = exports.Vhtax503ApplicationJsonErrorEnum || (exports.Vhtax503ApplicationJsonErrorEnum = {}));
var Vhtax503ApplicationJsonErrorDescriptionEnum;
(function (Vhtax503ApplicationJsonErrorDescriptionEnum) {
    Vhtax503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Vhtax503ApplicationJsonErrorDescriptionEnum = exports.Vhtax503ApplicationJsonErrorDescriptionEnum || (exports.Vhtax503ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax503ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax503ApplicationJson, _super);
    function Vhtax503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax503ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax503ApplicationJson = Vhtax503ApplicationJson;
var Vhtax504ApplicationJsonErrorEnum;
(function (Vhtax504ApplicationJsonErrorEnum) {
    Vhtax504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Vhtax504ApplicationJsonErrorEnum = exports.Vhtax504ApplicationJsonErrorEnum || (exports.Vhtax504ApplicationJsonErrorEnum = {}));
var Vhtax504ApplicationJsonErrorDescriptionEnum;
(function (Vhtax504ApplicationJsonErrorDescriptionEnum) {
    Vhtax504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Vhtax504ApplicationJsonErrorDescriptionEnum = exports.Vhtax504ApplicationJsonErrorDescriptionEnum || (exports.Vhtax504ApplicationJsonErrorDescriptionEnum = {}));
var Vhtax504ApplicationJson = /** @class */ (function (_super) {
    __extends(Vhtax504ApplicationJson, _super);
    function Vhtax504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Vhtax504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Vhtax504ApplicationJson.prototype, "errorDescription", void 0);
    return Vhtax504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Vhtax504ApplicationJson = Vhtax504ApplicationJson;
var VhtaxRequest = /** @class */ (function (_super) {
    __extends(VhtaxRequest, _super);
    function VhtaxRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", VhtaxRequestBody)
    ], VhtaxRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", VhtaxSecurity)
    ], VhtaxRequest.prototype, "security", void 0);
    return VhtaxRequest;
}(utils_1.SpeakeasyBase));
exports.VhtaxRequest = VhtaxRequest;
var VhtaxResponse = /** @class */ (function (_super) {
    __extends(VhtaxResponse, _super);
    function VhtaxResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], VhtaxResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], VhtaxResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax400ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax401ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax404ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax500ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax502ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax503ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Vhtax504ApplicationJson)
    ], VhtaxResponse.prototype, "vhtax504ApplicationJSONObject", void 0);
    return VhtaxResponse;
}(utils_1.SpeakeasyBase));
exports.VhtaxResponse = VhtaxResponse;
