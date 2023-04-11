import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TestGetDeviceConfigurationsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class TestGetDeviceConfigurationsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The ID of the test run
     */
    appUploadId?: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare class TestGetDeviceConfigurations200ApplicationJSONImage extends SpeakeasyBase {
    full?: string;
    thumb?: string;
}
/**
 * CPU data for device
 */
export declare class TestGetDeviceConfigurations200ApplicationJSONModelCpu extends SpeakeasyBase {
    core?: string;
    frequency?: string;
    text?: string;
}
export declare class TestGetDeviceConfigurations200ApplicationJSONModelDeviceFrameFull extends SpeakeasyBase {
    frameUrl?: string;
    height?: number;
    screen?: number[];
    width?: number;
}
export declare class TestGetDeviceConfigurations200ApplicationJSONModelDeviceFrameGrid extends SpeakeasyBase {
    frameUrl?: string;
    height?: number;
    screen?: number[];
    width?: number;
}
export declare class TestGetDeviceConfigurations200ApplicationJSONModelDeviceFrame extends SpeakeasyBase {
    full?: TestGetDeviceConfigurations200ApplicationJSONModelDeviceFrameFull;
    grid?: TestGetDeviceConfigurations200ApplicationJSONModelDeviceFrameGrid;
}
/**
 * Physical device dimensions
 */
export declare class TestGetDeviceConfigurations200ApplicationJSONModelDimensions extends SpeakeasyBase {
    depth?: Record<string, any>;
    height?: Record<string, any>;
    width?: Record<string, any>;
}
/**
 * Memory data for device
 */
export declare class TestGetDeviceConfigurations200ApplicationJSONModelMemory extends SpeakeasyBase {
    formattedSize?: string;
}
/**
 * Device screen resolution
 */
export declare class TestGetDeviceConfigurations200ApplicationJSONModelResolution extends SpeakeasyBase {
    height?: string;
    ppi?: string;
    width?: string;
}
/**
 * Physical device screen dimensions
 */
export declare class TestGetDeviceConfigurations200ApplicationJSONModelScreenSize extends SpeakeasyBase {
    cm?: string;
    in?: string;
}
export declare class TestGetDeviceConfigurations200ApplicationJSONModel extends SpeakeasyBase {
    availabilityCount?: number;
    /**
     * CPU data for device
     */
    cpu?: TestGetDeviceConfigurations200ApplicationJSONModelCpu;
    deviceFrame?: TestGetDeviceConfigurations200ApplicationJSONModelDeviceFrame;
    /**
     * Physical device dimensions
     */
    dimensions?: TestGetDeviceConfigurations200ApplicationJSONModelDimensions;
    formFactor?: string;
    manufacturer?: string;
    /**
     * Memory data for device
     */
    memory?: TestGetDeviceConfigurations200ApplicationJSONModelMemory;
    model?: string;
    name?: string;
    platform?: string;
    releaseDate?: string;
    /**
     * Device screen resolution
     */
    resolution?: TestGetDeviceConfigurations200ApplicationJSONModelResolution;
    screenRotation?: number;
    /**
     * Physical device screen dimensions
     */
    screenSize?: TestGetDeviceConfigurations200ApplicationJSONModelScreenSize;
}
export declare class TestGetDeviceConfigurations200ApplicationJSON extends SpeakeasyBase {
    /**
     * The unique id of the device configuration
     */
    id?: string;
    image?: TestGetDeviceConfigurations200ApplicationJSONImage;
    marketShare?: number;
    model?: TestGetDeviceConfigurations200ApplicationJSONModel;
    /**
     * The name of the device model and OS version
     */
    name?: string;
    os?: string;
    osName?: string;
    /**
     * The tier
     */
    tier?: number;
}
export declare class TestGetDeviceConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testGetDeviceConfigurations200ApplicationJSONObjects?: TestGetDeviceConfigurations200ApplicationJSON[];
}
