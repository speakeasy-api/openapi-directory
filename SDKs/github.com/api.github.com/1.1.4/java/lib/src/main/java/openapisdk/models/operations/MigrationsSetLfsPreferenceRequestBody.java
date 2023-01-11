package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MigrationsSetLfsPreferenceRequestBody {
    @JsonProperty("use_lfs")
    public MigrationsSetLfsPreferenceRequestBodyUseLfsEnum useLfs;
    public MigrationsSetLfsPreferenceRequestBody withUseLfs(MigrationsSetLfsPreferenceRequestBodyUseLfsEnum useLfs) {
        this.useLfs = useLfs;
        return this;
    }
}