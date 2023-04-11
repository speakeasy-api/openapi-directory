import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContainersVersionGetInfoBuildDetail extends SpeakeasyBase {
    /**
     * The build ID of the current API version.
     */
    api?: string;
    /**
     * The build ID of the current automount microservice version.
     */
    automount?: string;
    /**
     * The build ID of the current grupdater microservice version.
     */
    grupdater?: string;
    /**
     * The build ID of the current harmony microservice version.
     */
    harmony?: string;
    /**
     * The build ID of the current health-monitor microservice version.
     */
    healthMonitor?: string;
    /**
     * The build ID of the current hijack microservice version.
     */
    hijack?: string;
    /**
     * The build ID of the current ldap microservice version.
     */
    ldap?: string;
    /**
     * The build ID of the current logmet microservice version.
     */
    logmet?: string;
    /**
     * The build ID of the current lumberjack microservice version.
     */
    lumberjack?: string;
    /**
     * The build ID of the current redis-cluster version.
     */
    redisCluster?: string;
    /**
     * The build ID of the current sgwatcher microservice version.
     */
    sgwatcher?: string;
    /**
     * The build ID of the current volumes manager microservice version.
     */
    volmgr?: string;
}
/**
 * OK. A list of the current API and microservices versions is returend.
 */
export declare class ContainersVersionGetInfo extends SpeakeasyBase {
    /**
     * The current API version.
     */
    apiVersion?: string;
    /**
     * The current Arch version.
     */
    arch?: string;
    buildDetail?: ContainersVersionGetInfoBuildDetail;
    buildID?: string;
    buildNumber?: string;
    /**
     * Timestamp when the API version and all attached microservices were built.
     */
    buildTime?: string;
    gitCommit?: string;
    /**
     * The latest Go version.
     */
    goVersion?: string;
    /**
     * The latest Kernel version.
     */
    kernelVersion?: string;
    /**
     * Bluemix Containers
     */
    os?: string;
    /**
     * The latest API version.
     */
    version?: string;
}
