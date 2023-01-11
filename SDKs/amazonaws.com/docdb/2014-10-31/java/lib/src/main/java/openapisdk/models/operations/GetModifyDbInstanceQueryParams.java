package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyDbInstanceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyDbInstanceActionEnum action;
    public GetModifyDbInstanceQueryParams withAction(GetModifyDbInstanceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ApplyImmediately")
    public Boolean applyImmediately;
    public GetModifyDbInstanceQueryParams withApplyImmediately(Boolean applyImmediately) {
        this.applyImmediately = applyImmediately;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoMinorVersionUpgrade")
    public Boolean autoMinorVersionUpgrade;
    public GetModifyDbInstanceQueryParams withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CACertificateIdentifier")
    public String caCertificateIdentifier;
    public GetModifyDbInstanceQueryParams withCaCertificateIdentifier(String caCertificateIdentifier) {
        this.caCertificateIdentifier = caCertificateIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceClass")
    public String dbInstanceClass;
    public GetModifyDbInstanceQueryParams withDbInstanceClass(String dbInstanceClass) {
        this.dbInstanceClass = dbInstanceClass;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBInstanceIdentifier")
    public String dbInstanceIdentifier;
    public GetModifyDbInstanceQueryParams withDbInstanceIdentifier(String dbInstanceIdentifier) {
        this.dbInstanceIdentifier = dbInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NewDBInstanceIdentifier")
    public String newDBInstanceIdentifier;
    public GetModifyDbInstanceQueryParams withNewDbInstanceIdentifier(String newDBInstanceIdentifier) {
        this.newDBInstanceIdentifier = newDBInstanceIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PreferredMaintenanceWindow")
    public String preferredMaintenanceWindow;
    public GetModifyDbInstanceQueryParams withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PromotionTier")
    public Long promotionTier;
    public GetModifyDbInstanceQueryParams withPromotionTier(Long promotionTier) {
        this.promotionTier = promotionTier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyDbInstanceVersionEnum version;
    public GetModifyDbInstanceQueryParams withVersion(GetModifyDbInstanceVersionEnum version) {
        this.version = version;
        return this;
    }
}