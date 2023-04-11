import { SpeakeasyBase } from "../../../internal/utils";
export declare class Fileshare extends SpeakeasyBase {
    /**
     * The size of the file share in gigabyte.
     */
    capacity?: number;
    /**
     * The timestamp when the file share was created.
     */
    createdDate?: string;
    /**
     * The name of the file share.
     */
    fsName?: string;
    /**
     * The path to the volume on the host node.
     */
    hostPath?: string;
    /**
     * The number of Input/Output operations per second.
     */
    iops?: number;
    /**
     * The total number of IOPS considering the size of the file share. The size of your file share in gigabyte multiplied with the number of IOPS indicates the total number of IOPS. The higher the number of IOPS the faster you can read from and write to your volumes.
     */
    iopsTotal?: number;
    /**
     * The ID received from softlayer when the file share was ordered to be set up in softlayer.
     */
    orderId?: string;
    /**
     * The provider of the file share.
     */
    provider?: string;
    /**
     * The unique ID representing a Bluemix space in which the file share was created.
     */
    spaceGuid?: string;
    /**
     * The current state of the file share. When the file share is ready to be used, this attribute is set to `READY`.
     */
    state?: string;
    /**
     * The timestamp when the file share last was updated.
     */
    updatedDate?: string;
}
