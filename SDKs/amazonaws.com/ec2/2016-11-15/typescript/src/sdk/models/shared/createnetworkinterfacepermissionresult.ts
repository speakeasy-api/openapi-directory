import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState
/** 
 * Information about the state of the permission.
**/
export class CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  statusMessage?: Record<string, any>;
}


// CreateNetworkInterfacePermissionResultInterfacePermission
/** 
 * Information about the permission for the network interface.
**/
export class CreateNetworkInterfacePermissionResultInterfacePermission extends SpeakeasyBase {
  @SpeakeasyMetadata()
  awsAccountId?: Record<string, any>;

  @SpeakeasyMetadata()
  awsService?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfacePermissionId?: Record<string, any>;

  @SpeakeasyMetadata()
  permission?: Record<string, any>;

  @SpeakeasyMetadata()
  permissionState?: CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState;
}


// CreateNetworkInterfacePermissionResult
/** 
 * Contains the output of CreateNetworkInterfacePermission.
**/
export class CreateNetworkInterfacePermissionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  interfacePermission?: CreateNetworkInterfacePermissionResultInterfacePermission;
}
