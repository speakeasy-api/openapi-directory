import { SpeakeasyBase } from "../../../internal/utils";
import { VpnTunnelLogOptionsSpecification } from "./vpntunnellogoptionsspecification";
/**
 * The IKE version that is permitted for the VPN tunnel.
 */
export declare class VpnTunnelOptionsSpecificationIKEVersions extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.
 */
export declare class VpnTunnelOptionsSpecificationPhase1DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
 */
export declare class VpnTunnelOptionsSpecificationPhase1EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.
 */
export declare class VpnTunnelOptionsSpecificationPhase1IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.
 */
export declare class VpnTunnelOptionsSpecificationPhase2DHGroupNumbers extends SpeakeasyBase {
    value?: number;
}
/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.
 */
export declare class VpnTunnelOptionsSpecificationPhase2EncryptionAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.
 */
export declare class VpnTunnelOptionsSpecificationPhase2IntegrityAlgorithms extends SpeakeasyBase {
    value?: string;
}
/**
 * The tunnel options for a single VPN tunnel.
 */
export declare class VpnTunnelOptionsSpecification extends SpeakeasyBase {
    dpdTimeoutAction?: string;
    dpdTimeoutSeconds?: number;
    ikeVersions?: VpnTunnelOptionsSpecificationIKEVersions[];
    logOptions?: VpnTunnelLogOptionsSpecification;
    phase1DHGroupNumbers?: VpnTunnelOptionsSpecificationPhase1DHGroupNumbers[];
    phase1EncryptionAlgorithms?: VpnTunnelOptionsSpecificationPhase1EncryptionAlgorithms[];
    phase1IntegrityAlgorithms?: VpnTunnelOptionsSpecificationPhase1IntegrityAlgorithms[];
    phase1LifetimeSeconds?: number;
    phase2DHGroupNumbers?: VpnTunnelOptionsSpecificationPhase2DHGroupNumbers[];
    phase2EncryptionAlgorithms?: VpnTunnelOptionsSpecificationPhase2EncryptionAlgorithms[];
    phase2IntegrityAlgorithms?: VpnTunnelOptionsSpecificationPhase2IntegrityAlgorithms[];
    phase2LifetimeSeconds?: number;
    preSharedKey?: string;
    rekeyFuzzPercentage?: number;
    rekeyMarginTimeSeconds?: number;
    replayWindowSize?: number;
    startupAction?: string;
    tunnelInsideCidr?: string;
    tunnelInsideIpv6Cidr?: string;
}
