package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataLakeSettings
 * A structure representing a list of AWS Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
**/
public class DataLakeSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateDatabaseDefaultPermissions")
    public PrincipalPermissions[] createDatabaseDefaultPermissions;
    public DataLakeSettings withCreateDatabaseDefaultPermissions(PrincipalPermissions[] createDatabaseDefaultPermissions) {
        this.createDatabaseDefaultPermissions = createDatabaseDefaultPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateTableDefaultPermissions")
    public PrincipalPermissions[] createTableDefaultPermissions;
    public DataLakeSettings withCreateTableDefaultPermissions(PrincipalPermissions[] createTableDefaultPermissions) {
        this.createTableDefaultPermissions = createTableDefaultPermissions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataLakeAdmins")
    public DataLakePrincipal[] dataLakeAdmins;
    public DataLakeSettings withDataLakeAdmins(DataLakePrincipal[] dataLakeAdmins) {
        this.dataLakeAdmins = dataLakeAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TrustedResourceOwners")
    public String[] trustedResourceOwners;
    public DataLakeSettings withTrustedResourceOwners(String[] trustedResourceOwners) {
        this.trustedResourceOwners = trustedResourceOwners;
        return this;
    }
}