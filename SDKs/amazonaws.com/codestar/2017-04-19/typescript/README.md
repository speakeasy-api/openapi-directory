# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codestar/2017-04-19/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codestar/2017-04-19/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  AssociateTeamMemberRequest,
  AssociateTeamMemberResponse,
  AssociateTeamMemberXAmzTargetEnum,
} from "openapi/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    hmac: "YOUR_API_KEY_HERE",
  },
});

const req: AssociateTeamMemberRequest = {
  associateTeamMemberRequest: {
    clientRequestToken: "corrupti",
    projectId: "provident",
    projectRole: "distinctio",
    remoteAccessAllowed: false,
    userArn: "quibusdam",
  },
  xAmzAlgorithm: "unde",
  xAmzContentSha256: "nulla",
  xAmzCredential: "corrupti",
  xAmzDate: "illum",
  xAmzSecurityToken: "vel",
  xAmzSignature: "error",
  xAmzSignedHeaders: "deserunt",
  xAmzTarget: AssociateTeamMemberXAmzTargetEnum.CodeStar20170419AssociateTeamMember,
};

sdk.associateTeamMember(req).then((res: AssociateTeamMemberResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateTeamMember` - Adds an IAM user to the team for an AWS CodeStar project.
* `createProject` - Creates a project, including project resources. This action creates a project based on a submitted project request. A set of source code files and a toolchain template file can be included with the project request. If these are not provided, an empty project is created.
* `createUserProfile` - Creates a profile for a user that includes user preferences, such as the display name and email address assocciated with the user, in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar.
* `deleteProject` - Deletes a project, including project resources. Does not delete users associated with the project, but does delete the IAM roles that allowed access to the project.
* `deleteUserProfile` - Deletes a user profile in AWS CodeStar, including all personal preference data associated with that profile, such as display name and email address. It does not delete the history of that user, for example the history of commits made by that user.
* `describeProject` - Describes a project and its resources.
* `describeUserProfile` - Describes a user in AWS CodeStar and the user attributes across all projects.
* `disassociateTeamMember` - Removes a user from a project. Removing a user from a project also removes the IAM policies from that user that allowed access to the project and its resources. Disassociating a team member does not remove that user's profile from AWS CodeStar. It does not remove the user from IAM.
* `listProjects` - Lists all projects in AWS CodeStar associated with your AWS account.
* `listResources` - Lists resources associated with a project in AWS CodeStar.
* `listTagsForProject` - Gets the tags for a project.
* `listTeamMembers` - Lists all team members associated with a project.
* `listUserProfiles` - Lists all the user profiles configured for your AWS account in AWS CodeStar.
* `tagProject` - Adds tags to a project.
* `untagProject` - Removes tags from a project.
* `updateProject` - Updates a project in AWS CodeStar.
* `updateTeamMember` - Updates a team member's attributes in an AWS CodeStar project. For example, you can change a team member's role in the project, or change whether they have remote access to project resources.
* `updateUserProfile` - Updates a user's profile in AWS CodeStar. The user profile is not project-specific. Information in the user profile is displayed wherever the user's information appears to other users in AWS CodeStar. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

