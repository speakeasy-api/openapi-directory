package shared

type User struct {
	ARN            *string
	AccessString   *string
	Authentication *Authentication
	Engine         *string
	Status         *string
	UserGroupIds   []string
	UserID         *string
	UserName       *string
}
