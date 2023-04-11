import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances extends SpeakeasyBase {
    /**
     * The number of container instances that you require.
     */
    desired?: number;
    /**
     * The maximum number of container instances that you want to run in your container group.
     */
    max?: number;
    /**
     * The minimum number of container instances that you want to run in your container group.
     */
    min?: number;
}
/**
 * The container group parameter that you want to update.
 */
export declare class ContainersGroupsNameOrIdPatchUpdatedInfo extends SpeakeasyBase {
    /**
     * Enable or disable the Autorecovery mode for your container group. To enable it, enter true. If you want to disable it, enter false. Note: You can only enable/ disable Autorecovery mode if your container group was initially created with Autorecovery mode enabled.
     */
    autorecovery?: string;
    /**
     * A list of environment variables that you want to add to your container group. Every environment variable needs to be a key=value pair. Every key that you use needs to be unique for this container group. Multiple environment variables are separated with comma (,)
     */
    environment?: string[];
    numberInstances?: ContainersGroupsNameOrIdPatchUpdatedInfoNumberInstances;
}
