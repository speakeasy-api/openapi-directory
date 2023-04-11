import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The input parameter to create a new file share in a space.
 */
export declare class FileshareParam extends SpeakeasyBase {
    /**
     * The number of input/output transactions per second. Available values are 0.25, 2 or 4.
     */
    fsIOPS: number;
    /**
     * The name of the new file share that you want to create. The name can contain uppercase letters, lowercase letters, numbers, underscores (_), and hyphens (-).
     */
    fsName: string;
    /**
     * The size of the file share in gigabyte. Run `cf ic volume fs-flavor-list` or call the GET /volumes/fs/flavors/json API endpoint to retrieve a list of available file share sizes.
     */
    fsSize: number;
}
