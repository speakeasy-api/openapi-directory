package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PreprocessingGetPageAngleSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeApikey apikey;
    public PreprocessingGetPageAngleSecurity withApikey(openapisdk.models.shared.SchemeApikey apikey) {
        this.apikey = apikey;
        return this;
    }
}