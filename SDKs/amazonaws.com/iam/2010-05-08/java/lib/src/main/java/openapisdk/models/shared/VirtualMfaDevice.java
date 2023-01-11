package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * VirtualMfaDevice
 * Contains information about a virtual MFA device.
**/
public class VirtualMfaDevice {
    public String base32StringSeed;
    public VirtualMfaDevice withBase32StringSeed(String base32StringSeed) {
        this.base32StringSeed = base32StringSeed;
        return this;
    }
    public OffsetDateTime enableDate;
    public VirtualMfaDevice withEnableDate(OffsetDateTime enableDate) {
        this.enableDate = enableDate;
        return this;
    }
    public String qrCodePNG;
    public VirtualMfaDevice withQrCodePng(String qrCodePNG) {
        this.qrCodePNG = qrCodePNG;
        return this;
    }
    public String serialNumber;
    public VirtualMfaDevice withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    public Tag[] tags;
    public VirtualMfaDevice withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    public User user;
    public VirtualMfaDevice withUser(User user) {
        this.user = user;
        return this;
    }
}