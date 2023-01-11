package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetBacktrackDbClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetBacktrackDbClusterActionEnum action;
    public GetBacktrackDbClusterQueryParams withAction(GetBacktrackDbClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BacktrackTo")
    public OffsetDateTime backtrackTo;
    public GetBacktrackDbClusterQueryParams withBacktrackTo(OffsetDateTime backtrackTo) {
        this.backtrackTo = backtrackTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DBClusterIdentifier")
    public String dbClusterIdentifier;
    public GetBacktrackDbClusterQueryParams withDbClusterIdentifier(String dbClusterIdentifier) {
        this.dbClusterIdentifier = dbClusterIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Force")
    public Boolean force;
    public GetBacktrackDbClusterQueryParams withForce(Boolean force) {
        this.force = force;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UseEarliestTimeOnPointInTimeUnavailable")
    public Boolean useEarliestTimeOnPointInTimeUnavailable;
    public GetBacktrackDbClusterQueryParams withUseEarliestTimeOnPointInTimeUnavailable(Boolean useEarliestTimeOnPointInTimeUnavailable) {
        this.useEarliestTimeOnPointInTimeUnavailable = useEarliestTimeOnPointInTimeUnavailable;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetBacktrackDbClusterVersionEnum version;
    public GetBacktrackDbClusterQueryParams withVersion(GetBacktrackDbClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}