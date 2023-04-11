# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/asana.com/1.0/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/asana.com/1.0/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateAttachmentForObjectRequest,
  CreateAttachmentForObjectResponse
} from "openapi/dist/sdk/models/operations";
import {
  AttachmentRequestResourceSubtypeEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK({
  security: {
    oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
  },
});

const req: CreateAttachmentForObjectRequest = {
  attachmentRequest: {
    connectToApp: false,
    file: {
      content: "corrupti".encode(),
      file: "provident",
    },
    name: "distinctio",
    parent: "quibusdam",
    resourceSubtype: AttachmentRequestResourceSubtypeEnum.External,
    url: "unde",
  },
  optFields: [
    "corrupti",
    "illum",
    "vel",
    "error",
  ],
  optPretty: false,
};

sdk.attachments.createAttachmentForObject(req).then((res: CreateAttachmentForObjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### attachments

* `createAttachmentForObject` - Upload an attachment
* `deleteAttachment` - Delete an attachment
* `getAttachment` - Get an attachment
* `getAttachmentsForObject` - Get attachments from an object

### auditLogAPI

* `getAuditLogEvents` - Get audit log events

### batchAPI

* `createBatchRequest` - Submit parallel requests

### customFieldSettings

* `getCustomFieldSettingsForPortfolio` - Get a portfolio's custom fields
* `getCustomFieldSettingsForProject` - Get a project's custom fields

### customFields

* `createCustomField` - Create a custom field
* `createEnumOptionForCustomField` - Create an enum option
* `deleteCustomField` - Delete a custom field
* `getCustomField` - Get a custom field
* `getCustomFieldsForWorkspace` - Get a workspace's custom fields
* `insertEnumOptionForCustomField` - Reorder a custom field's enum
* `updateCustomField` - Update a custom field
* `updateEnumOption` - Update an enum option

### events

* `getEvents` - Get events on a resource

### goalRelationships

* `addSupportingRelationship` - Add a supporting goal relationship
* `getGoalRelationship` - Get a goal relationship
* `getGoalRelationships` - Get goal relationships
* `removeSupportingRelationship` - Removes a supporting goal relationship
* `updateGoalRelationship` - Update a goal relationship

### goals

* `addFollowers` - Add a collaborator to a goal
* `createGoal` - Create a goal
* `createGoalMetric` - Create a goal metric
* `deleteGoal` - Delete a goal
* `getGoal` - Get a goal
* `getGoals` - Get goals
* `getParentGoalsForGoal` - Get parent goals from a goal
* `removeFollowers` - Remove a collaborator from a goal
* `updateGoal` - Update a goal
* `updateGoalMetric` - Update a goal metric

### jobs

* `getJob` - Get a job by id

### organizationExports

* `createOrganizationExport` - Create an organization export request
* `getOrganizationExport` - Get details on an org export request

### portfolioMemberships

* `getPortfolioMembership` - Get a portfolio membership
* `getPortfolioMemberships` - Get multiple portfolio memberships
* `getPortfolioMembershipsForPortfolio` - Get memberships from a portfolio

### portfolios

* `addCustomFieldSettingForPortfolio` - Add a custom field to a portfolio
* `addItemForPortfolio` - Add a portfolio item
* `addMembersForPortfolio` - Add users to a portfolio
* `createPortfolio` - Create a portfolio
* `deletePortfolio` - Delete a portfolio
* `getItemsForPortfolio` - Get portfolio items
* `getPortfolio` - Get a portfolio
* `getPortfolios` - Get multiple portfolios
* `removeCustomFieldSettingForPortfolio` - Remove a custom field from a portfolio
* `removeItemForPortfolio` - Remove a portfolio item
* `removeMembersForPortfolio` - Remove users from a portfolio
* `updatePortfolio` - Update a portfolio

### projectBriefs

* `createProjectBrief` - Create a project brief
* `deleteProjectBrief` - Delete a project brief
* `getProjectBrief` - Get a project brief
* `updateProjectBrief` - Update a project brief

### projectMemberships

* `getProjectMembership` - Get a project membership
* `getProjectMembershipsForProject` - Get memberships from a project

### projectStatuses

* `createProjectStatusForProject` - Create a project status
* `deleteProjectStatus` - Delete a project status
* `getProjectStatus` - Get a project status
* `getProjectStatusesForProject` - Get statuses from a project

### projectTemplates

* `getProjectTemplate` - Get a project template
* `getProjectTemplates` - Get multiple project templates
* `getProjectTemplatesForTeam` - Get a team's project templates
* `instantiateProject` - Instantiate a project from a project template

### projects

* `addCustomFieldSettingForProject` - Add a custom field to a project
* `addFollowersForProject` - Add followers to a project
* `addMembersForProject` - Add users to a project
* `createProject` - Create a project
* `createProjectForTeam` - Create a project in a team
* `createProjectForWorkspace` - Create a project in a workspace
* `deleteProject` - Delete a project
* `duplicateProject` - Duplicate a project
* `getProject` - Get a project
* `getProjects` - Get multiple projects
* `getProjectsForTask` - Get projects a task is in
* `getProjectsForTeam` - Get a team's projects
* `getProjectsForWorkspace` - Get all projects in a workspace
* `getTaskCountsForProject` - Get task count of a project
* `projectSaveAsTemplate` - Create a project template from a project
* `removeCustomFieldSettingForProject` - Remove a custom field from a project
* `removeFollowersForProject` - Remove followers from a project
* `removeMembersForProject` - Remove users from a project
* `updateProject` - Update a project

### sections

* `addTaskForSection` - Add task to section
* `createSectionForProject` - Create a section in a project
* `deleteSection` - Delete a section
* `getSection` - Get a section
* `getSectionsForProject` - Get sections in a project
* `insertSectionForProject` - Move or Insert sections
* `updateSection` - Update a section

### statusUpdates

* `createStatusForObject` - Create a status update
* `deleteStatus` - Delete a status update
* `getStatus` - Get a status update
* `getStatusesForObject` - Get status updates from an object

### stories

* `createStoryForTask` - Create a story on a task
* `deleteStory` - Delete a story
* `getStoriesForTask` - Get stories from a task
* `getStory` - Get a story
* `updateStory` - Update a story

### tags

* `createTag` - Create a tag
* `createTagForWorkspace` - Create a tag in a workspace
* `deleteTag` - Delete a tag
* `getTag` - Get a tag
* `getTags` - Get multiple tags
* `getTagsForTask` - Get a task's tags
* `getTagsForWorkspace` - Get tags in a workspace
* `updateTag` - Update a tag

### tasks

* `addDependenciesForTask` - Set dependencies for a task
* `addDependentsForTask` - Set dependents for a task
* `addFollowersForTask` - Add followers to a task
* `addProjectForTask` - Add a project to a task
* `addTagForTask` - Add a tag to a task
* `createSubtaskForTask` - Create a subtask
* `createTask` - Create a task
* `deleteTask` - Delete a task
* `duplicateTask` - Duplicate a task
* `getDependenciesForTask` - Get dependencies from a task
* `getDependentsForTask` - Get dependents from a task
* `getSubtasksForTask` - Get subtasks from a task
* `getTask` - Get a task
* `getTasks` - Get multiple tasks
* `getTasksForProject` - Get tasks from a project
* `getTasksForSection` - Get tasks from a section
* `getTasksForTag` - Get tasks from a tag
* `getTasksForUserTaskList` - Get tasks from a user task list
* `removeDependenciesForTask` - Unlink dependencies from a task
* `removeDependentsForTask` - Unlink dependents from a task
* `removeFollowerForTask` - Remove followers from a task
* `removeProjectForTask` - Remove a project from a task
* `removeTagForTask` - Remove a tag from a task
* `searchTasksForWorkspace` - Search tasks in a workspace
* `setParentForTask` - Set the parent of a task
* `updateTask` - Update a task

### teamMemberships

* `getTeamMembership` - Get a team membership
* `getTeamMemberships` - Get team memberships
* `getTeamMembershipsForTeam` - Get memberships from a team
* `getTeamMembershipsForUser` - Get memberships from a user

### teams

* `addUserForTeam` - Add a user to a team
* `createTeam` - Create a team
* `getTeam` - Get a team
* `getTeamsForUser` - Get teams for a user
* `getTeamsForWorkspace` - Get teams in a workspace
* `removeUserForTeam` - Remove a user from a team
* `updateTeam` - Update a team

### timePeriods

* `getTimePeriod` - Get a time period
* `getTimePeriods` - Get time periods

### typeahead

* `typeaheadForWorkspace` - Get objects via typeahead

### userTaskLists

* `getUserTaskList` - Get a user task list
* `getUserTaskListForUser` - Get a user's task list

### users

* `getFavoritesForUser` - Get a user's favorites
* `getUser` - Get a user
* `getUsers` - Get multiple users
* `getUsersForTeam` - Get users in a team
* `getUsersForWorkspace` - Get users in a workspace or organization

### webhooks

* `createWebhook` - Establish a webhook
* `deleteWebhook` - Delete a webhook
* `getWebhook` - Get a webhook
* `getWebhooks` - Get multiple webhooks
* `updateWebhook` - Update a webhook

### workspaceMemberships

* `getWorkspaceMembership` - Get a workspace membership
* `getWorkspaceMembershipsForUser` - Get workspace memberships for a user
* `getWorkspaceMembershipsForWorkspace` - Get the workspace memberships for a workspace

### workspaces

* `addUserForWorkspace` - Add a user to a workspace or organization
* `getWorkspace` - Get a workspace
* `getWorkspaces` - Get multiple workspaces
* `removeUserForWorkspace` - Remove a user from a workspace or organization
* `updateWorkspace` - Update a workspace
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

