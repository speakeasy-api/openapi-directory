"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateStatusEnum = void 0;
var CertificateStatusEnum;
(function (CertificateStatusEnum) {
    CertificateStatusEnum["PendingValidation"] = "PENDING_VALIDATION";
    CertificateStatusEnum["Issued"] = "ISSUED";
    CertificateStatusEnum["Inactive"] = "INACTIVE";
    CertificateStatusEnum["Expired"] = "EXPIRED";
    CertificateStatusEnum["ValidationTimedOut"] = "VALIDATION_TIMED_OUT";
    CertificateStatusEnum["Revoked"] = "REVOKED";
    CertificateStatusEnum["Failed"] = "FAILED";
})(CertificateStatusEnum = exports.CertificateStatusEnum || (exports.CertificateStatusEnum = {}));
