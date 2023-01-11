package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PosixProfile
 * The full POSIX identity, including user ID (<code>Uid</code>), group ID (<code>Gid</code>), and any secondary groups IDs (<code>SecondaryGids</code>), that controls your users' access to your Amazon EFS file systems. The POSIX permissions that are set on files and directories in your file system determine the level of access your users get when transferring files into and out of your Amazon EFS file systems.
**/
public class PosixProfile {
    @JsonProperty("Gid")
    public Long gid;
    public PosixProfile withGid(Long gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecondaryGids")
    public Long[] secondaryGids;
    public PosixProfile withSecondaryGids(Long[] secondaryGids) {
        this.secondaryGids = secondaryGids;
        return this;
    }
    @JsonProperty("Uid")
    public Long uid;
    public PosixProfile withUid(Long uid) {
        this.uid = uid;
        return this;
    }
}